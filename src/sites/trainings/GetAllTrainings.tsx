import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import { Button, Checkbox, InputAdornment, TextField } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { UserContext } from "../../contexts/UserContext"
import { GetAllTrainingsResponse } from "../../models/Api"
import QuizListItem from "./components/QuizListItem"

interface GetAllTrainingsFormProps {
  onlyLiked?: boolean
  search?: string
}

export const GetAllTrainings = () => {
  const userContext = useContext(UserContext)

  const navigate = useNavigate()

  const { control, handleSubmit, watch } = useForm<GetAllTrainingsFormProps>({
    defaultValues: {
      onlyLiked: false,
      search: "",
    },
  })

  let watchSearch = watch("search")
  let watchLiked = watch("onlyLiked")

  const { data, refetch } = useQuery<any, any, GetAllTrainingsResponse>(
    ["/training/all", { search: watch("search") }],
    async () => {
      const res = await axios.get(
        `/training/all?onlyLiked=${watchLiked}&search=${watchSearch}`
      )
      return res.data
    },
    {
      onSuccess: async (response) => {},
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting trainings",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )
  useEffect(() => {
    refetch()
  }, [watch("search"), watch("onlyLiked")])

  console.log("search:", watchSearch)
  console.log("only liked", watchLiked)
  console.log("liczba treningow", data?.length)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center space-x-4">
        <Controller
          control={control}
          name="search"
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              id="filled-search"
              label="Search trainings"
              type="search"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="onlyLiked"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              onChange={(e) => onChange(e.target.checked)}
              checked={value}
            />
          )}
        />
        Liked only
      </div>
      <div className="flex items-center justify-center">
        <Button
          type="submit"
          variant="contained"
          onClick={() => {
            navigate(`/training/create/1`)
          }}
          style={{ borderRadius: 9999 }}
          startIcon={<AddIcon />}
        >
          Add quiz
        </Button>
      </div>
      {data
        ?.filter((e) => e.visibility === true)
        .map((e) => (
          <div key={e.name}>
            <QuizListItem
              id={e.id}
              name={e.name}
              trainingSession={e.trainingSession?.[0]}
              withButtons={userContext.userId === e.userId}
              questionCount={e.questionCount}
              userId={e.userId}
              userEmail={e.user?.email}
              tags={e.tagTraining}
              liked={e.likedTraining}
            />
          </div>
        ))}
    </div>
  )
}
