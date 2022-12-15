import DeleteOutlined from "@mui/icons-material/DeleteOutlined"
import { IconButton } from "@mui/material"
import axios from "axios"
import { QueryClient, useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { Api } from "../../models/Api"

interface DeleteQuestionProps {
  questionId: string
}

export const DeleteQuestion = ({ questionId }: DeleteQuestionProps) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteMutation = useMutation<any, any, DeleteQuestionProps>(
    async ({ questionId }) => {
      const res = await axios.delete(`/question/${questionId}`)
      return res.data
    },

    {
      onSuccess: async (response) => {
        toast.success("Delete succesfully!", { autoClose: 2000 })
        queryClient.invalidateQueries("/questions/all")
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Delete error.", {
          autoClose: 2000,
        })
      },
    }
  )

  return (
    <button
      onClick={() => {
        deleteMutation.mutate({ questionId })
      }}
      className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 "
    >
      <DeleteOutlined fontSize="small" />
    </button>
  )
}
