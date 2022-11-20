import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Layout } from "../../components/layout/Layout"
import QuizListItem from "./components/QuizListItem"
import Sidebar from "../../components/Sidebar"
import { GetOneTrainingResponse, GetQuestionsResponse } from "../../models/Api"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ListIcon from "@mui/icons-material/List"

import IconButton from "@mui/material/IconButton"
import { GetAllQuestions } from "./GetAllQuestions"
import { QuestionListItem } from "./components/QuestionListItem"

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

  return (
    <Layout>
      <div className="flex flex-row space-x-2 bg-gray-200">
        <Sidebar />
        <div className="flex flex-col w-1/2 mt-2 ">
          <div className="">
            <QuizListItem id={data?.id} name={data?.name} />
          </div>

          <div className="">
            <GetAllQuestions trainingId={id} withAnswers={true} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
