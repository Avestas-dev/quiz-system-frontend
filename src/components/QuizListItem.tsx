import Delete from "@mui/icons-material/Delete"
import Bolt from "@mui/icons-material/Bolt"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import ShareIcon from "@mui/icons-material/Share"

export default function QuizListItem() {
  return (
    <div className="flex flex-col bg-white border-1 border-gray-400 h-[25%] rounded-xl">
      <div className="h-5/6 p-2 space-x-2">
        <div className="float-left  bg-gray-300   p-2 rounded-xl">
          Obrazek quizu
        </div>
        <div className="float-left flex flex-col mt-2 ">
          <div className="flex flex-row">
            <p className="text-gray-500 text-[10px] mt-1">QUIZ</p>
            <div className="flex flex-row rounded bg-yellow-400 text-yellow-500 text-[10px]">
              <div className="text-[12px]">
                <Bolt fontSize="inherit"></Bolt>
              </div>
              <p className="mt-1">HARD</p>
            </div>
          </div>
          <div>Nazwa quizu</div>
          <div className="flex flex-row text-[10px]">
            <PrecisionManufacturingIcon fontSize="inherit" />
            <p> 0% poprawność odpowiedzi</p>
          </div>
          <div className="flex flex-row text-[10px]">
            <PlayArrowIcon fontSize="inherit" />
            <p> 0 odtworzeń</p>
          </div>
        </div>
        <div className="float-right bg-gray-300 rounded-xl">
          <Delete />
        </div>
      </div>
      <div className="p-2">
        <div className="float-left flex flex-row">
          <AccountCircleIcon color="disabled" fontSize="large" />
          <p className="text-[10px] mt-3">Autor: nazwa_użytkownika</p>
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
            <p className="mt-1">Edytuj</p>
          </div>
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
            <ShareIcon fontSize="small" />
            <p className="mt-1">Udostępnij</p>
          </div>
        </div>
        <div className="float-right flex flex-row mt-2 ml-2">
          <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
            <FolderOpenIcon fontSize="small" />
            <p className="mt-1">Zapisz</p>
          </div>
        </div>

        <div className="float-right flex flex-row mt-2 ml-2">
          <div className="bg-gray-300 text-[10px] flex flex-row p-1 rounded space-x-2 pr-3">
            <FavoriteBorderIcon fontSize="small" />
            <p className="mt-1">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}
