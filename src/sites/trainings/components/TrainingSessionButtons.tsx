import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

export const TrainingSessionButtons = () => {
  return (
    <div className="flex flex-col bg-blue-500">
      <button className="flex flex-col items-center rounded-2xl bg-gray-800 h-[25%]">
        <ChevronLeftIcon fontSize="large" />
        <p>Poprzednie</p>
      </button>
      <button className="flex flex-col bg-gray-500">
        <p>Następne</p>
      </button>
      <button className="flex flex-col bg-gray-500">
        <p>Przerwij</p>
      </button>
      <button className="flex flex-col bg-gray-500">
        <p>Zakończ</p>
      </button>
    </div>
  )
}
