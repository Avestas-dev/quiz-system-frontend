import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import Delete from "@mui/icons-material/DeleteOutlined"
import { useNavigate, useParams } from "react-router"
import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { Theme, useTheme } from "@mui/material/styles"
import { AddTrainingRequest, TagsResponse } from "../../models/Api"
import { useRef } from "react"
import { Controller, useForm } from "react-hook-form"
import { InputControl } from "../../components/InputControl"
import React from "react"
import { toast } from "react-toastify"

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

type CreateTrainingFormProps = {
  name: string
  visibility: boolean
  tagIds: number[]
}

export const CreateTraining = () => {
  const { control, handleSubmit, watch } = useForm<CreateTrainingFormProps>({})

  const { type } = useParams()

  const navigate = useNavigate()

  const theme = useTheme()

  const [tagName, setTagName] = React.useState<string[]>([])

  const { data: tagData } = useQuery<any, any, TagsResponse>(
    "/tag",
    async () => {
      const res = await axios.get("/tag")
      return res.data
    }
  )

  const handleChange = (event: SelectChangeEvent<typeof tagName>) => {
    const {
      target: { value },
    } = event
    setTagName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

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
    createTrainingMutation.mutate(props)
  }

  return (
    <div className="bg-gray-300 h-screen">
      <EditTrainingTopBar saveButtonFunction={handleSubmit(onSubmit)} />
      <div className="p-2 flex justify-center pt-20">
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
            <form className="space-x-4">
              <InputControl
                control={control}
                name="name"
                label="nazwa treningu"
                autoFocus
                autoComplete="training name"
                inputProps={{ inputMode: "email" }}
                defaultValue="nazwa treningu"
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
