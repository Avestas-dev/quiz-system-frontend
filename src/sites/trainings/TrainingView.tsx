import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Layout } from "../../components/layout/Layout"
import QuizListItem from "./components/QuizListItem"
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
import { Container } from "@mui/material"

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
      <Container
        sx={{
          paddingX: 4,
          paddingY: 4,
          marginLeft: "auto",
          marginRight: "auto",
          flex: 1,
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
        }}
        maxWidth="xl"
      >
        <div className="flex flex-col">
          {data && (
            <QuizListItem
              liked={data?.likedTraining}
              id={data?.id}
              name={data?.name}
              withButtons={userContext.userId === data?.userId}
              userEmail={data.user?.email}
              tags={data.tagTraining}
              trainingSession={data.trainingSession?.[0]}
            />
          )}

          <GetAllQuestions
            withQuestionButtons={false}
            withButtons={true}
            trainingId={id}
            withAnswers={true}
            tag={"jednokrotnego wyboru"}
          />
        </div>
      </Container>
    </Layout>
  )
}
