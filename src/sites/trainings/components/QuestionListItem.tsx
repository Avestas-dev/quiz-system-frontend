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
  tag?: string
}

export const QuestionListItem = ({
  id,
  question,
  withButtons,
  tag,
}: QuestionProps) => {
  const navigate = useNavigate()
  return (
    <div
      className="flex flex-col  bg-white border-1 border-gray-400 rounded-xl"
      onClick={() => {
        //navigate("/")
      }}
    >
      <div className="h-5/6 p-2 space-x-2">
        <div className="flex flex-row space-x-1 float-left">
          <input
            checked
            onChange={() => {
              console.log("dupa")
            }}
            className=" accent-green-400"
            id="multi-choice-checkbox"
            type="checkbox"
          ></input>
          <p>{tag}</p>
        </div>
        <div className="flex flex-row space-x-1 float-right border-2 text-[10px] border-gray-300">
          <AccessTimeIcon fontSize="small" />
          <p className="mt-1">30 sekund</p>
        </div>
      </div>
      <div className="p-2 space-x-2">
        <div className="float-left  bg-gray-300 h-24 p-2 rounded-xl">
          Obrazek pytania
        </div>
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
                Edytuj
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
