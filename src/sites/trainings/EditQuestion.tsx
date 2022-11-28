import { Layout } from "../../components/layout/Layout"

import { useParams } from "react-router"
import { GetQuestionWithAnswers } from "./components/GetQuestionWithAnswers"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"

export const EditQuestion = () => {
  const { id } = useParams()

  return (
    <div>
      <EditTrainingTopBar />
      <div className="flex flex-col h-screen items-center bg-gray-700">
        <GetQuestionWithAnswers questionId={id} />
      </div>
    </div>
  )
}
