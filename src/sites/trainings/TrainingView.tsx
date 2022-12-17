import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Layout } from "../../components/layout/Layout"
import QuizListItem from "./components/QuizListItem"
import Sidebar from "../../components/Sidebar"
import {
  GetOneTrainingResponse,
  GetQuestionsResponse,
  TagsResponse,
} from "../../models/Api"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ListIcon from "@mui/icons-material/List"

import IconButton from "@mui/material/IconButton"
import { GetAllQuestions } from "./GetAllQuestions"
import { QuestionListItem } from "./components/QuestionListItem"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export const TrainingView = () => {
  const { id } = useParams()

  console.log(id)

  const { data } = useQuery<any, any, GetOneTrainingResponse>(
    "/training",
    async () => {
      const res = await axios.get(`/training/${id}`)
      return res.data
    }
  )

  const userContext = useContext(UserContext)

  return (
    <Layout>
      <div className="flex flex-row space-x-2 bg-gray-200">
        <Sidebar />
        <div className="flex flex-col w-1/2 mt-2 ">
          <div className="">
            {data && (
              <QuizListItem
                id={data?.id}
                name={data?.name}
                withButtons={userContext.userId === data?.userId}
                userEmail={data.user?.email}
                tags={data.tagTraining}
              />
            )}
          </div>

          <div className="">
            <GetAllQuestions
              withQuestionButtons={false}
              withButtons={true}
              trainingId={id}
              withAnswers={true}
              tag={"jednokrotnego wyboru"}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
