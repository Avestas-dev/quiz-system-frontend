import axios from "axios"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import { GetUserTrainingSessionResponse } from "../../models/Api"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import { TrainingSessionButtons } from "./components/TrainingSessionButtons"
import { TrainingSessionQuestion } from "./components/TrainingSessionQuestion"

export interface TrainingSessionProps {
  trainingSessionId: number
}

export const TrainingSession = () => {
  const { trainingSessionId } = useParams()

  const { data } = useQuery<any, any, GetUserTrainingSessionResponse>(
    `/training-session/${trainingSessionId}`,
    async () => {
      const res = await axios.get(`/training-session/${trainingSessionId}`)
      return res.data
    },
    {
      onSuccess: async (response) => {
        // toast.success("Training session data loaded succesfully", {
        //   autoClose: 3000,
        // })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting training session data",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const [questionIndex, setQuestionIndex] = useState(0)

  const handleNextClick = () => {
    setQuestionIndex(questionIndex + 1)
  }

  const handlePreviousClick = () => {
    setQuestionIndex(questionIndex - 1)
  }

  const handlePauseClick = () => {}

  const handleFinishClick = () => {}

  console.log("indeks", questionIndex)

  return (
    <div>
      <EditTrainingTopBar />
      <div className="flex h-screen w-screen justify-center items-center bg-gray-700">
        <div className="flex flex-row w-[70%] h-[80%] p-8 space-x-8">
          {data?.trainingId && data?.trainingQuestions?.[questionIndex] && (
            <TrainingSessionQuestion
              trainingId={data.trainingId}
              questionId={
                data.trainingQuestions?.[questionIndex].trainingQuestionId
              }
            />
          )}
          <TrainingSessionButtons
            isFirst={questionIndex == 0}
            isLast={questionIndex == data?.trainingQuestions?.length}
            next={handleNextClick}
            previous={handlePreviousClick}
            finish={handleFinishClick}
            pause={handlePauseClick}
          />
        </div>
      </div>
    </div>
  )
}
