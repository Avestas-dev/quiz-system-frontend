import { useNavigate, useParams } from "react-router"
import { GetAllQuestions } from "./GetAllQuestions"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import Delete from "@mui/icons-material/DeleteOutlined"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import axios from "axios"
import { useQuery } from "react-query"
import { GetOneTrainingResponse, TagsResponse } from "../../models/Api"
import { useEffect } from "react"

export const EditTraining = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data } = useQuery<any, any, GetOneTrainingResponse>(
    `/training/${id}`,
    async () => {
      const res = await axios.get(`/training/${id}`)
      return res.data
    }
  )

  return (
    <div className="bg-gray-300 h-screen">
      <EditTrainingTopBar />
      <div className="flex flex-row  p-2 space-x-2">
        <div className=" w-[50%] grid place-items-center">
          <div className="float-right m-2">
            <button
              onClick={() => {
                navigate(`/question/create/`)
              }}
              className="bg-yellow-200 border-2 border-gray-400 rounded-xl p-1"
            >
              Dodaj pytanie
            </button>
          </div>
          <div className="w-[100%]">
            <GetAllQuestions
              withQuestionButtons={true}
              withButtons={false}
              trainingId={id}
              withAnswers={true}
              tag={"wielokrotnego wyboru"}
            />
          </div>
        </div>
        <div className="w-[50%] bg-gray-300 mt-[50px] flex flex-col rounded-xl h-full border-2 border-gray-400">
          <div className="flex flex-row">
            <div className="grid place-items-center rounded-xl bg-gray-400 m-2 w-[85%] ml-8 h-48">
              zdjecie quizu
            </div>
            <div className="bg-red-300 text-[10px] mt-2 p-1 rounded-xl h-full">
              <Delete color="error" />
            </div>
          </div>
          <div className="ml-8 flex flex-col pb-10">
            <div className="text-[24px]">
              {data?.name}
              <CreateOutlinedIcon />
            </div>
            publiczny polski 30s
          </div>
        </div>
      </div>
    </div>
  )
}
