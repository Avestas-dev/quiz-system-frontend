import axios from "axios"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import { GetUserTrainingSessionResponse } from "../../models/Api"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import { TrainingSessionQuestion } from "./components/TrainingSessionQuestion"

export interface TrainingSessionProps {
  trainingSessionId: number
}

export const TrainingSession = () => {
  const { trainingSessionId } = useParams()

  const navigate = useNavigate()

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

  return (
    <div>
      <EditTrainingTopBar />
      <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-700">
        {/* <button
          className="bg-green-500"
          onClick={() => {
            if (data !== undefined)
              navigate(
                `/training-session/${trainingSessionId}/question/${
                  data?.trainingQuestions?.find((x) => x !== undefined)
                    ?.trainingQuestionId
                }`
              )
          }}
        >
          rozpocznij quiz
        </button> */}
        {data?.trainingId && (
          <TrainingSessionQuestion trainingId={data.trainingId} />
        )}
      </div>
    </div>
  )
}
