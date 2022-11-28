import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import Delete from "@mui/icons-material/DeleteOutlined"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { GetAllQuestions } from "./GetAllQuestions"
import { useNavigate, useParams } from "react-router"
import { Button, IconButton, Input, TextField } from "@mui/material"
import { useMutation } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { AddTrainingRequest } from "../../models/Api"
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

  const onSubmit = (props: CreateTrainingFormProps) => {
    props.tagIds = [1]
    props.visibility = true
    createTrainingMutation.mutate(props)
  }

  return (
    <div className="bg-gray-300 h-screen">
      <EditTrainingTopBar saveButtonFunction={handleSubmit(onSubmit)} />
      <div className="flex flex-row  p-2 space-x-2">
        <div className=" w-[50%] grid place-items-center">
          <div className="float-right m-2">
            <button
              onClick={() => {
                navigate(`/question/create/`)
              }}
              className="bg-yellow-200 border-2 border-gray-400 rounded-xl p-1"
            >
              Dodaj pytanie
            </button>
          </div>
          <div className="w-[100%]"></div>
        </div>
        <div className="w-[50%] bg-gray-300 mt-[50px] flex flex-col rounded-xl h-full border-2 border-gray-400">
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
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>
            </form>
            publiczny polski 30s
          </div>
        </div>
      </div>
    </div>
  )
}