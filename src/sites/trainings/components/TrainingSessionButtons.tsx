import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

export const TrainingSessionButtons = ({
  isFirst,
  isLast,
  next,
  previous,
  finish,
  pause,
}: any) => {
  console.log(isFirst)
  return (
    <div className="flex flex-col space-y-2 w-[20%]">
      {isFirst ? (
        <div></div>
      ) : (
        <button
          onClick={previous}
          className="flex flex-col justify-center items-center rounded-2xl hover:bg-green-500 bg-gray-800 h-[35%] border-2 border-gray-100"
        >
          <ChevronLeftIcon fontSize="large" />
          <p className="pl-2 pr-2 pb-2">Poprzednie</p>
        </button>
      )}
      {isLast ? (
        <div></div>
      ) : (
        <button
          onClick={next}
          className="flex flex-col justify-center items-center rounded-2xl hover:bg-green-500 bg-gray-800 h-[35%] border-2 border-gray-100"
        >
          <ChevronRightIcon fontSize="large" />
          <p className="pl-2 pr-2 pb-2">Następne</p>
        </button>
      )}
      <button
        onClick={pause}
        className="flex flex-col justify-center items-center rounded-2xl hover:bg-yellow-500 bg-gray-800 h-[15%] border-2 border-gray-100"
      >
        <p>Przerwij</p>
      </button>
      <button
        onClick={finish}
        className="flex flex-col justify-center items-center rounded-2xl hover:bg-red-500 bg-gray-800 h-[15%] border-2 border-gray-100"
      >
        <p>Zakończ</p>
      </button>
    </div>
  )
}
