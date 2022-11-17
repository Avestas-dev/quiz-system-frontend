import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Layout } from "../../components/layout/Layout"
import QuizListItem from "../../components/QuizListItem"
import Sidebar from "../../components/Sidebar"
import { GetOneTrainingResponse } from "../../models/Api"

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
      <div className="flex flex-row space-x-2 bg-gray-300">
        <Sidebar />
        <div className="w-1/2 h-screen mt-2">
          <QuizListItem id={data?.id} name={data?.name} />
        </div>
      </div>
    </Layout>
  )
}
