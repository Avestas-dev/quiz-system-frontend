import axios from "axios"
import { useQuery } from "react-query"
import { GetQuestionResponse } from "../../../models/Api"
import MovieCreation from "@mui/icons-material/MovieCreation"
import AudioFile from "@mui/icons-material/AudioFile"
import Image from "@mui/icons-material/Image"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

interface GetQuestionWithAnswers {
  questionId?: string
}

export const GetQuestionWithAnswers = ({
  questionId,
}: GetQuestionWithAnswers) => {
  const navigate = useNavigate()

  function getRandomHtmlColor(): string {
    const letters = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }

    return color
  }

  const { data } = useQuery<any, any, GetQuestionResponse>(
    "/questions/all",
    async () => {
      const res = await axios.get(`/question/${questionId}`)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Question loaded succesfully", { autoClose: 3000 })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting Question",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  return (
    <>
      <div className="flex mt-8 flex-col  space-y-8 p-8 rounded-2xl  w-[60%] h-[80%] bg-yellow-300">
        <div className="flex flex-row space-x-2  ">
          <div className="flex flex-col w-1/5 space-y-2  items-center">
            <div className="flex flex-col items-center rounded-xl bg-yellow-200 p-1 w-3/5">
              <MovieCreation />
              <p>Wideo</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-yellow-200 p-1 w-3/5">
              <AudioFile />
              <p>Audio</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-yellow-200 p-1 w-3/5">
              <Image />
              <p>Obraz</p>
            </div>
          </div>
          <div className="w-4/5 rounded-xl border-4 border-yellow-200">
            <TextField
              placeholder={data?.question}
              fullWidth
              multiline
              rows={6}
              style={{
                padding: "0.25rem",
                height: "",
              }}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-8">
          {data?.QuestionAnswer?.map((e) => (
            <div key={e.id} className="flex flex-col w-[25%] ">
              <div
                style={{ backgroundColor: `${getRandomHtmlColor()}` }}
                className=" rounded-xl"
              >
                <div className="float-right">
                  <Checkbox
                    icon={<RadioButtonUncheckedOutlinedIcon fontSize="small" />}
                    checkedIcon={
                      <CheckCircleOutlineOutlinedIcon
                        color="success"
                        fontSize="small"
                      />
                    }
                  />
                </div>
                <div className="float-left ">
                  <IconButton>
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <div className="float-left ">
                  <IconButton>
                    <ImageOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <div className="float-left ">
                  <IconButton>
                    <FunctionsOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <TextField placeholder={e.answer} rows={10} multiline />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[60%] space-x-2 mt-2">
        <div className="float-right">
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
            }}
          >
            Anuluj
          </Button>
        </div>
        <div className="float-right">
          <Button
            onClick={() => {
              navigate("/trainings")
            }}
            variant="contained"
            style={{
              backgroundColor: "black",
            }}
          >
            Zapisz
          </Button>
        </div>
      </div>
    </>
  )
}
