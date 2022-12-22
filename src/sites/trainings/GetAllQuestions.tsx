import axios, { AxiosResponse } from "axios"
import { useQuery } from "react-query"

import { GetQuestionsResponse } from "../../models/Api"
import { QuestionListItem } from "./components/QuestionListItem"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ListIcon from "@mui/icons-material/List"

import IconButton from "@mui/material/IconButton"
import { toast } from "react-toastify"
import React from "react"
export interface GetAllQuestionsProps {
  trainingId: string | undefined
  withAnswers: boolean
  description?: string
  schema?: string
  withButtons?: boolean
  withQuestionButtons?: boolean
  tag?: string
}
export const GetAllQuestions = ({
  trainingId,
  withAnswers = true,
  description = "",
  schema = "",
  withButtons,
  withQuestionButtons,
  tag,
}: GetAllQuestionsProps) => {
  const [showQuestions, setShowQuestons] = React.useState(false)

  const handleShowQuestions = () => setShowQuestons(!showQuestions)

  const { data } = useQuery<any, any, GetQuestionsResponse>(
    "/questions/all",
    async () => {
      const res = await axios.get(
        `/question/all/${trainingId}?withAnswers=${withAnswers}}`
      )
      return res.data
    },
    {
      onSuccess: async (response) => {
        //toast.success("Questions loaded succesfully", { autoClose: 3000 })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting questions",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  console.log(data)
  return (
    <div className="flex flex-col">
      {withButtons ? (
        <div className="">
          <div className="float-left">
            <IconButton onClick={handleShowQuestions}>
              <ListIcon />
            </IconButton>
          </div>
          <div className="float-left mt-2 ml-2">
            {!data && data === undefined ? (
              <p>no questions</p>
            ) : data.length > 10 ? (
              <p>{data.length} questions</p>
            ) : data.length == 1 ? (
              <p>{data.length} question</p>
            ) : (
              <p>{data.length} questions</p>
            )}
          </div>
          <div className="float-right flex flex-row mt-2 ml-2">
            <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
              <PlayArrowIcon fontSize="small" />
              <p className="mt-1">Quiz preview</p>
            </div>
          </div>
          <div className="float-right flex flex-row mt-2 ml-2">
            <button className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3 hover:bg-gray-400">
              <VisibilityIcon fontSize="small" />
              <p className="mt-1">Show answers</p>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {showQuestions || !withButtons ? (
        <div className="space-y-2">
          {data &&
            data.length > 0 &&
            data?.map((e) => (
              <div key={e.question}>
                <QuestionListItem
                  id={e.id}
                  withButtons={withQuestionButtons}
                  question={e.question}
                  tag={tag}
                />
              </div>
            ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
