import axios, { AxiosResponse } from "axios"
import { useQuery } from "react-query"

import { GetQuestionsResponse } from "../../models/Api"
import { QuestionListItem } from "./components/QuestionListItem"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ListIcon from "@mui/icons-material/List"

import IconButton from "@mui/material/IconButton"
export interface GetAllQuestionsProps {
  trainingId: string | undefined
  withAnswers: boolean
  description?: string
  schema?: string
}
export const GetAllQuestions = ({
  trainingId,
  withAnswers = false,
  description = "",
  schema = "",
}: GetAllQuestionsProps) => {
  const { data } = useQuery<any, any, GetQuestionsResponse>(
    "/questions/all",
    async () => {
      const res = await axios.get(
        `/question/all/${trainingId}?withAnswers=${withAnswers}}`
      )
      return res.data
    }
  )

  console.log(data)
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="float-left">
          <IconButton>
            <ListIcon />
          </IconButton>
        </div>
        <div className="float-left mt-2 ml-2">
          {data === undefined ? (
            <p>brak pytań</p>
          ) : data.length > 10 ? (
            <p>{data.length} pytań</p>
          ) : data.length == 1 ? (
            <p>{data.length} pytanie</p>
          ) : (
            <p>{data.length} pytania</p>
          )}
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
            <PlayArrowIcon fontSize="small" />
            <p className="mt-1">Podgląd quizu</p>
          </div>
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
            <VisibilityIcon fontSize="small" />
            <p className="mt-1">Pokaż odpowiedzi</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {data?.map((e) => (
          <QuestionListItem question={e.question} />
        ))}
      </div>
    </div>
  )
}
