import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import MovieCreation from "@mui/icons-material/MovieCreation"
import AudioFile from "@mui/icons-material/AudioFile"
import Image from "@mui/icons-material/Image"
import { EditTrainingTopBar } from "./components/EditTrainingTopBar"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined"
import { useNavigate, useParams } from "react-router"
import { useForm } from "react-hook-form"
import { InputControl } from "../../components/InputControl"
import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { AddQuestionWithAnswersRequest, TagsResponse } from "../../models/Api"
import { CheckboxControl } from "../../components/CheckboxControl"

type CreateQuestionWithAnswersFormProps = {
  question: string
  trainingId: number
  answers: {
    answer?: string
    isCorrect?: boolean
  }[]
}

export const CreateQuestionWithAnswers = () => {
  const { control, handleSubmit, watch } =
    useForm<CreateQuestionWithAnswersFormProps>({})

  const { trainingId } = useParams()

  const navigate = useNavigate()
  const answers: {
    answer?: string
    isCorrect?: boolean
  }[] = [
    { answer: "odpowiedz1", isCorrect: false },
    { answer: "odpowiedz2", isCorrect: false },
    { answer: "odpowiedz3", isCorrect: false },
    { answer: "odpowiedz4", isCorrect: false },
  ]

  const createQuestionMutation = useMutation<
    any,
    any,
    AddQuestionWithAnswersRequest
  >(
    async (createQuestionData) => {
      const res = await axios.post("/question/with-answers", createQuestionData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Added questions succesfully!", { autoClose: 2000 })
        navigate(-1)
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Add question error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const onSubmit = (props: CreateQuestionWithAnswersFormProps) => {
    console.log(props)

    props.trainingId = Number(trainingId)
    createQuestionMutation.mutate(props)
  }

  return (
    <div>
      <EditTrainingTopBar />
      <div className="flex flex-col h-screen items-center bg-gray-700">
        <>
          <div className="flex mt-8 flex-col  space-y-8 p-8 rounded-2xl  w-[60%] h-[80%] bg-yellow-300">
            <div className="flex flex-row space-x-2  ">
              <div className="flex flex-col w-1/5 space-y-2  items-center">
                <div className="flex flex-col items-center rounded-xl bg-yellow-200 p-1 w-3/5">
                  <MovieCreation />
                  <p>Wideo</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-yellow-200 p-1 w-3/5">
                  <AudioFile />
                  <p>Audio</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-yellow-200 p-1 w-3/5">
                  <Image />
                  <p>Obraz</p>
                </div>
              </div>
              <div className="w-4/5 rounded-xl border-4 border-yellow-200">
                <InputControl
                  placeholder={"question"}
                  control={control}
                  name="question"
                  label="question"
                  fullWidth
                  multiline
                  rows={6}
                  style={{
                    padding: "0.25rem",
                    height: "",
                  }}
                  autoFocus
                />
              </div>
            </div>
            <div className="flex flex-row space-x-8">
              {answers.map((answer, index) => (
                <div key={answer.answer} className="flex ">
                  <div className=" bg-purple-500 rounded-xl">
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
              ))}
            </div>
          </div>
          <div className="w-[60%] ">
            <div className="float-right p-2 ">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                }}
              >
                Anuluj
              </Button>
            </div>
            <div className="float-right p-2">
              {/* <Button
                onClick={() => {
                  handleSubmit(onSubmit)
                  // navigate(-1)
                }}
                variant="contained"
                style={{
                  backgroundColor: "black",
                }}
              >
                Zapisz
              </Button> */}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Zapisz
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
