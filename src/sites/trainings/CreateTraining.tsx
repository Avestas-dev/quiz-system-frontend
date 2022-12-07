import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import Delete from "@mui/icons-material/DeleteOutlined"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { GetAllQuestions } from "./GetAllQuestions"
import { useNavigate, useParams } from "react-router"
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { AddTrainingRequest, TagsResponse } from "../../models/Api"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { InputControl } from "../../components/InputControl"

type CreateTrainingFormProps = {
  name: string
  visibility: boolean
  tagIds: number[]
}

export const CreateTraining = () => {
  const { control, handleSubmit, watch } = useForm<CreateTrainingFormProps>({})

  const { type } = useParams()

  const navigate = useNavigate()

  const createTrainingMutation = useMutation<any, any, AddTrainingRequest>(
    async (createTrainingData) => {
      const res = await axios.post("/training", createTrainingData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Added training succesfully!", { autoClose: 2000 })
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Add question error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const { data } = useQuery<any, any, TagsResponse>(
    "/tag",
    async () => {
      const res = await axios.get("/tag")
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("tags loaded succesfully", { autoClose: 3000 })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting tags",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const onSubmit = (props: CreateTrainingFormProps) => {
    props.tagIds = [1]
    props.visibility = false
    createTrainingMutation.mutate(props)
  }

  return (
    <div className="bg-gray-300 h-screen">
      <EditTrainingTopBar saveButtonFunction={handleSubmit(onSubmit)} />
      <div className="p-2 items-center">
        <div className="w-[50%] bg-gray-300 p-5 flex flex-col rounded-xl h-full border-2 border-gray-400">
          <div className="flex flex-row">
            <div className="grid place-items-center rounded-xl bg-gray-400 m-2 w-[85%] ml-8 h-48">
              zdjecie quizu
            </div>
            <div className="bg-red-300 text-[10px] mt-2 p-1 rounded-xl h-full">
              <Delete color="error" />
            </div>
          </div>
          <div className="ml-8 flex flex-col pb-10">
            <form>
              <InputControl
                control={control}
                name="name"
                label="nazwa treningu"
                autoFocus
                autoComplete="training name"
                inputProps={{ inputMode: "email" }}
                defaultValue="nazwa treningu"
              />
              {/* <InputControl
                control={control}
                name="visibility"
                label="widocznosc"
                autoFocus
              /> */}
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>
              <Box sx={{ maxWidth: 230 }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">tag</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                    label="Age"
                    onChange={() => {}}
                  >
                    {data?.map((tag) => (
                      <MenuItem>{tag.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
