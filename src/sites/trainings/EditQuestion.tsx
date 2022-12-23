import { Layout } from "../../components/layout/Layout"

import { useParams } from "react-router"
import { GetQuestionWithAnswers } from "./components/GetQuestionWithAnswers"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import { Container } from "@mui/material"

export const EditQuestion = () => {
  const { id } = useParams()

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
        <div className="flex flex-col items-center">
          <GetQuestionWithAnswers questionId={id} />
        </div>
      </Container>
    </Layout>
  )
}
