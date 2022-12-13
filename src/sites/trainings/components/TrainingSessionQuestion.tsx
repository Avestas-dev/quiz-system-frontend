import { IconButton } from "@mui/material"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined"
import { TrainingSessionButtons } from "./TrainingSessionButtons"

interface TrainingSessionQuestionProps {
  id?: number
  trainingId?: number
  trainingName?: string
  trainingQuestionId?: number
  question?: string
  answerStatus?: string
}

export const TrainingSessionQuestion = ({
  trainingQuestionId,
  question,
}: TrainingSessionQuestionProps) => {
  return (
    <div className="flex flex-row w-[80%] p-8 space-x-8">
      <div className="flex  flex-col w-[80%]  space-y-8  rounded-2xl bg-yellow-300">
        <div className="flex h-48 items-center justify-center rounded-xl border-4 border-yellow-200">
          <div>{question}</div>
        </div>
        <div className="flex flex-row space-x-8">
          {/* {answers.map((answer, index) => (
                <div key={answer.answer} className="flex ">
                  <div
                    style={{ backgroundColor: `${answer.color}` }}
                    className={" rounded-xl"}
                  >
                    <div className="float-right">
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
                    </div>
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
                    <InputControl
                      placeholder={answer.answer}
                      control={control}
                      name={`answers.${index}.answer`}
                      multiline
                      rows={8}
                      style={{
                        padding: "0.25rem",
                        height: "",
                      }}
                      autoFocus
                    />
                  </div>
                </div>
              ))} */}
        </div>
      </div>
      <TrainingSessionButtons />
    </div>
  )
}
