import Delete from "@mui/icons-material/DeleteOutlined"
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material"
import axios from "axios"
import React from "react"
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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(tag: string, tags: string[], theme: Theme) {
  return {
    fontWeight:
      tags.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

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

  const theme = useTheme()

  const [tagName, setTagName] = React.useState<string[]>([])

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

  const defaultTags: string[] = tagData!.map((tag) => tag.name!)

  const handleChange = (event: SelectChangeEvent<typeof tagName>) => {
    const {
      target: { value },
    } = event
    setTagName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

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
    let tagIds: number[] = []
    for (let i = 0; i < tagData!.length; i++) {
      for (let j = 0; j < tagName.length; j++) {
        if (tagData![i].name === tagName[j]) {
          tagIds.push(tagData![i].id!)
        }
      }
    }
    props.tagIds = tagIds
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
              <FormControl sx={{ width: 220 }}>
                <InputLabel id="demo-multiple-chip-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={tagName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {tagData?.map((tag) => (
                    <MenuItem
                      key={tag.id}
                      value={tag.name}
                      style={getStyles(tag.name!, tagName, theme)}
                    >
                      {tag.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
