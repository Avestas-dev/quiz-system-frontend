import Delete from "@mui/icons-material/DeleteOutlined"
import Bolt from "@mui/icons-material/Bolt"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import ShareIcon from "@mui/icons-material/Share"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { DeleteTraining } from "../DeleteTraining"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "react-toastify"
import {
  GetUserTrainingSessionResponse,
  StartTrainingSessionResponse,
} from "../../../models/Api"
import { Box, Chip } from "@mui/material"
interface QuizProps {
  id?: number
  name?: string
  trainingSession?: {
    id?: number
    createdAt?: string
    finished?: boolean
    updatedAt?: string
  }
  visibility?: boolean
  questionCount?: number
  withButtons?: boolean
  liked?: boolean
  userId?: number
  userEmail?: string
  tags?:
    | {
        tagId?: number | undefined
        tagName?: string | undefined
      }[]
    | undefined
}

interface TrainingSessionProps {
  trainingId: number
}

export default function QuizListItem({
  id,
  name,
  trainingSession,
  visibility = true,
  withButtons = true,
  questionCount,
  userId,
  liked,
  userEmail,
  tags,
}: QuizProps) {
  const navigate = useNavigate()

  const userContext = useContext(UserContext)

  const startTraining: TrainingSessionProps = { trainingId: id! }

  const queryClient = useQueryClient()

  const startTrainingMutation = useMutation<
    StartTrainingSessionResponse,
    any,
    TrainingSessionProps
  >(
    async () => {
      const res = await axios.post("/training-session/start", startTraining)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Training session started!", { autoClose: 2000 })
        navigate(
          `/training-session/${response.trainingSessionId}/training/${id}/question/0`
        )
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Session start error", {
          autoClose: 2000,
        })
      },
    }
  )

  const likeTrainingMutation = useMutation<any, any, any>(
    async (data) => {
      const res = await axios.post(`/like-switch/${data}`)
      return res.data
    },
    {
      onSuccess: async (response) => {
        queryClient.invalidateQueries("/training/all")
        queryClient.invalidateQueries("/training")
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Like error", {
          autoClose: 2000,
        })
      },
    }
  )

  return (
    <div className="flex flex-col bg-white shadow-2xl border-4 border-gray-400 rounded-2xl hover:drop-shadow-2xl">
      <div className="h-5/6 p-2 space-x-2 ">
        <div
          onClick={() => {
            navigate(`/training/${id}`)
          }}
          className="float-left flex flex-col mt-2 "
        >
          <div className="flex flex-row">
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {tags &&
                tags?.map((tag) => (
                  <Chip
                    color="warning"
                    variant="outlined"
                    key={tag.tagName}
                    label={tag.tagName}
                  />
                ))}
            </Box>
          </div>
          <h2>{name}</h2>
        </div>
        <div className="float-right bg-gray-300 rounded-xl">
          {id !== undefined && userContext.userId == userId ? (
            <DeleteTraining trainingId={id.toString()} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="p-2">
        <div className="float-left flex flex-row">
          <AccountCircleIcon color="disabled" fontSize="large" />
          <p className="text-[10px] mt-3">Author: {userEmail}</p>
        </div>
        <div>
          {withButtons ? (
            <div className="float-right flex flex-row mt-2 ml-2">
              <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3 hover:bg-gray-200">
                <button
                  className="mt-1"
                  onClick={() => {
                    navigate(`/training/edit/${id}`)
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          <button
            onClick={() => {
              navigate(`/training/${id}`)
            }}
            className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3 hover:bg-gray-200"
          >
            <ShareIcon fontSize="small" />
            <p className="mt-1">Details</p>
          </button>
        </div>

        <div className="float-right flex flex-row mt-2 ml-2">
          <button
            onClick={() => {
              likeTrainingMutation.mutate(id)
            }}
            className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3 hover:bg-red-200"
          >
            {liked ? (
              <FavoriteBorderIcon fontSize="small" />
            ) : (
              <ThumbDownIcon fontSize="small" />
            )}
            {liked ? (
              <p className="mt-1">Liked</p>
            ) : (
              <p className="mt-1">Not liked</p>
            )}
          </button>
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          {questionCount && questionCount >= 0 ? (
            trainingSession?.finished || trainingSession === undefined ? (
              <button
                onClick={() => {
                  startTrainingMutation.mutate(startTraining)
                }}
                className="bg-green-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3 hover:bg-green-400"
              >
                <PlayCircleOutlineIcon fontSize="small" />
                <p className="mt-1">Start quiz</p>
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate(
                    `/training-session/resume/${trainingSession.id}/training/${id}/question/0`
                  )
                  console.log("halo")
                }}
                className="bg-yellow-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3 hover:bg-yellow-400"
              >
                <PlayCircleOutlineIcon fontSize="small" />
                <p className="mt-1">Resume training session</p>
              </button>
            )
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
