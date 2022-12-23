import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { useNavigate } from "react-router"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import Delete from "@mui/icons-material/DeleteOutlined"
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined"
import { DeleteQuestion } from "../DeleteQuestion"

interface QuestionProps {
  id?: number
  question?: string
  withButtons?: boolean
  updatedAt?: string
}

export const QuestionListItem = ({
  id,
  question,
  withButtons,
  updatedAt,
}: QuestionProps) => {
  const navigate = useNavigate()

  const date = new Date(updatedAt!)
  return (
    <div
      className="flex flex-col shadow-xl  bg-white border-2 border-gray-400 rounded-xl"
      onClick={() => {
        //navigate("/")
      }}
    >
      <div className="h-5/6 p-2 space-x-2">
        <div className="flex flex-row space-x-1 float-left">
          <h3>Last update: {date.toDateString()}</h3>
        </div>
        <div className="flex flex-row space-x-1 float-right border-2 text-[10px] border-gray-300">
          <AccessTimeIcon fontSize="small" />
          <p className="mt-1">30 seconds</p>
        </div>
      </div>
      <div className="p-2 space-x-2">
        <div className="grid place-items-center h-24">
          <p>{question}</p>
        </div>
      </div>
      {withButtons ? (
        <div className="p-2">
          <div className="float-right ml-2">
            <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 ">
              <ContentCopyOutlinedIcon fontSize="small" />
            </div>
          </div>
          <div className="float-right ml-2">
            {id !== undefined ? (
              <DeleteQuestion questionId={id.toString()} />
            ) : (
              <div></div>
            )}
          </div>
          <div className="float-right ml-2">
            <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-2">
              <CreateOutlinedIcon fontSize="small" />
              <button
                onClick={() => {
                  navigate(`/question/edit/${id}`)
                }}
                className="mt-1"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
