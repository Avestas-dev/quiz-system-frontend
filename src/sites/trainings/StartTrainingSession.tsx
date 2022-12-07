import axios from "axios"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"

export interface TrainingSessionProps {
  trainingId: number
}

export const StartTrainingSession = () => {
  const { id } = useParams()

  const endTraining: TrainingSessionProps = { trainingId: Number(id) }

  useEffect(() => {
    const { data } = useQuery<any, any, any>(
      "/training-session/end",
      async () => {
        const res = await axios.post("/training-session/end", endTraining)
        return res.data
      },
      {
        onSuccess: async (response) => {
          //toast.success("Added training succesfully!", { autoClose: 2000 })
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "Add question error.", {
            autoClose: 2000,
          })
        },
      }
    )
  }, [])

  console.log(id)

  return (
    <div>
      <EditTrainingTopBar />
    </div>
  )
}
