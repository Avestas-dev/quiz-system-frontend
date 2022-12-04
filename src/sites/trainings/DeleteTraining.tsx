import DeleteOutlined from "@mui/icons-material/DeleteOutlined"
import { IconButton } from "@mui/material"
import axios from "axios"
import { QueryClient, useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { Api } from "../../models/Api"

interface DeleteTrainingProps {
  trainingId: string
}

export const DeleteTraining = ({ trainingId }: DeleteTrainingProps) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteMutation = useMutation<any, any, DeleteTrainingProps>(
    async ({ trainingId }) => {
      const res = await axios.delete(`/training/${trainingId}`)
      return res.data
    },

    {
      onSuccess: async (response) => {
        toast.success("Delete succesfully!", { autoClose: 2000 })
        queryClient.invalidateQueries("/training/all")
        navigate("/trainings")
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Delete error.", {
          autoClose: 2000,
        })
      },
    }
  )

  return (
    <div>
      <IconButton
        onClick={() => {
          deleteMutation.mutate({ trainingId })
        }}
      >
        <DeleteOutlined fontSize="small" />
      </IconButton>
    </div>
  )
}
