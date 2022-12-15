import Delete from "@mui/icons-material/DeleteOutlined"
import { MenuItem, Select } from "@mui/material"
import axios from "axios"
import { Controller, useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import { InputControl } from "../../components/InputControl"
import {
  EditTrainingRequest,
  GetOneTrainingResponse,
  TagsResponse,
} from "../../models/Api"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import { GetAllQuestions } from "./GetAllQuestions"

type EditTrainingFormProps = {
  trainingId: number
  name: string
  visibility: boolean
  tagIds: number[]
}

export const EditTraining = () => {
  const { control, handleSubmit, watch } = useForm<EditTrainingFormProps>({})

  const { id } = useParams()

  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { data } = useQuery<any, any, GetOneTrainingResponse>(
    `/training/${id}`,
    async () => {
      const res = await axios.get(`/training/${id}`)
      return res.data
    }
  )

  const { data: tagData } = useQuery<any, any, TagsResponse>(
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

  console.log(tagData)

  const editTrainingMutation = useMutation<any, any, EditTrainingRequest>(
    async (editTrainingData) => {
      const res = await axios.put("/training", editTrainingData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Edited training succesfully!", { autoClose: 2000 })
        queryClient.invalidateQueries(`/training/${id}`)
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Edit question error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const onSubmit = (props: EditTrainingFormProps) => {
    props.trainingId = data?.id!
    props.tagIds = [1]
    props.visibility = true
    editTrainingMutation.mutate(props)
  }

  return (
    <div className="bg-gray-300 h-screen">
      <EditTrainingTopBar saveButtonFunction={handleSubmit(onSubmit)} />
      <div className="flex flex-row  p-2 space-x-2">
        <div className=" w-[50%] grid place-items-center">
          <div className="float-right m-2">
            <button
              onClick={() => {
                navigate(`/question/create/${id}`)
              }}
              className="bg-yellow-200 border-2 border-gray-400 rounded-xl p-1"
            >
              Dodaj pytanie
            </button>
          </div>
          <div className="w-[100%]">
            <GetAllQuestions
              withQuestionButtons={true}
              withButtons={false}
              trainingId={id}
              withAnswers={true}
              tag={"wielokrotnego wyboru"}
            />
          </div>
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
                label={data?.name}
                autoFocus
                autoComplete="training name"
                inputProps={{ inputMode: "email" }}
                defaultValue={data?.name}
              />
              {data?.tagTraining?.map((e) => (
                <Controller
                  name="tagIds"
                  control={control}
                  defaultValue={[e.tagId!]}
                  render={() => (
                    <Select>
                      {tagData?.map((e) => (
                        <MenuItem value={e.id} key={e.id}>
                          {e.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              ))}
              <Controller
                name="tagIds"
                control={control}
                defaultValue={[]}
                render={() => (
                  <Select>
                    {tagData?.map((e) => (
                      <MenuItem value={e.id} key={e.id}>
                        {e.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
