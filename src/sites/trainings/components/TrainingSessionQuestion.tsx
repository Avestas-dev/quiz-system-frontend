import { Box, Card, IconButton } from "@mui/material"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined"
import { TrainingSessionButtons } from "./TrainingSessionButtons"
import { EditTrainingTopBar } from "./EditTrainingTopBar"
import { useQuery } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { GetQuestionResponse, GetQuestionsResponse } from "../../../models/Api"
import { CheckboxControl } from "../../../components/CheckboxControl"

interface TrainingSessionQuestionProps {
  id?: number
  trainingId?: number
  trainingName?: string
  questionId?: number
  question?: string
  answerStatus?: string
  withAnswers?: boolean
}

export const TrainingSessionQuestion = ({
  trainingId,
  questionId,
  question,
  withAnswers = true,
}: TrainingSessionQuestionProps) => {
  function getRandomHtmlColor(): string {
    const letters = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }

    return color
  }

  const { data } = useQuery<any, any, GetQuestionResponse>(
    "/question",
    async () => {
      const res = await axios.get(`/question/${questionId}`)
      return res.data
    },
    {
      onSuccess: async (response) => {
        console.log("response is: ", response)
        //toast.success("Questions loaded succesfully", { autoClose: 3000 })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting question",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  return (
    <div className="flex flex-col w-[80%] p-2 rounded-2xl bg-yellow-300">
      <div className="flex items-center h-[70%] justify-center rounded-xl border-4 border-yellow-200">
        <div>{data?.question}</div>
      </div>
      <div className="flex h-full flex-row space-x-8 ">
        {data?.QuestionAnswer?.map((answer, index) => (
          <div key={answer.answer} className="flex p-2 flex-col w-[25%] h-full">
            <div
              style={{ backgroundColor: `${getRandomHtmlColor()}` }}
              className="rounded-xl flex flex-col h-full"
            >
              {/* <div className="float-right">
                      <CheckboxControl
                        control={control}
                        name={`answers.${index}.isCorrect`}
                        aria-label="test"
                        icon={
                          <RadioButtonUncheckedOutlinedIcon fontSize="small" />
                        }
                        checkedIcon={
                          <CheckCircleOutlineOutlinedIcon
                            color="success"
                            fontSize="small"
                          />
                        }
                        defaultChecked={false}
                      />
                    </div> */}
              <div>
                <div className="float-left">
                  <IconButton>
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <div className="float-left">
                  <IconButton>
                    <ImageOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <div className="float-left">
                  <IconButton>
                    <FunctionsOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>

              <div className="flex rounded-xl h-full items-center justify-center">
                <div>{answer && answer?.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
