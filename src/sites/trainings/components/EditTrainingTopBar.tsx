import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { useNavigate } from "react-router"

export const EditTrainingTopBar = ({ saveButtonFunction }: any) => {
  const navigate = useNavigate()
  return (
    <div className="bg-yellow-300 space-x-3 pl-4 pr-4 h-12">
      <div className="mt-3 float-left">
        <p className="">QuizzMe</p>
      </div>
      <div className="mt-3 float-left text-[10px] content-center space-x-1">
        <button className="">Kategoria</button>
        <CreateOutlinedIcon fontSize="small" />
      </div>
      <div className="float-right m-2">
        <button
          onClick={saveButtonFunction}
          className="bg-yellow-100 rounded p-1"
        >
          Zapisz
        </button>
      </div>
      <div className="float-right m-2">
        <button className="p-1" onClick={() => navigate(-1)}>
          Powrót do poprzedniego edytora
        </button>
      </div>
    </div>
  )
}
