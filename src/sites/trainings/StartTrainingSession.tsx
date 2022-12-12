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

  console.log(id)

  return (
    <div>
      <EditTrainingTopBar />
    </div>
  )
}
