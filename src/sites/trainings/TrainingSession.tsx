import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  Modal,
} from "@mui/material"
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import {
  AddUserAnswerRequest,
  GetQuestionsResponse,
  GetTrainingSessionQuestionsResponse,
  GetUserTrainingSessionResponse,
} from "../../models/Api"

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined"
import React from "react"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { modalStyle } from "../../styles/globalStyles"
import { Layout } from "../../components/layout/Layout"

export interface TrainingSessionProps {
  trainingId: number
}

export const TrainingSession = () => {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  const queryClient = useQueryClient()

  const { trainingSessionId, questionindex, trainingId } = useParams()

  const navigate = useNavigate()

  const { data: userTrainingSessionData } = useQuery<
    any,
    any,
    GetUserTrainingSessionResponse
  >(
    `/training-session`,
    async () => {
      const res = await axios.get(`/training-session/${trainingSessionId}`)
      return res.data
    },
    {
      onSuccess: async (response) => {
        // toast.success("Training session data loaded succesfully", {
        //   autoClose: 3000,
        // })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting training session data",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const { data: questionsWithAnswers } = useQuery<
    any,
    any,
    GetQuestionsResponse
  >(
    "/questions/all",
    async () => {
      const res = await axios.get(
        `/question/all/${trainingId}?withAnswers=${true}`
      )
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Question loaded succesfully", { autoClose: 3000 })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting Question",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const { data: trainingSessionData } = useQuery<
    any,
    any,
    GetTrainingSessionQuestionsResponse
  >(
    `/training-session/questions`,
    async () => {
      const res = await axios.get(
        `/training-session/${trainingSessionId}/questions`
      )
      return res.data
    },
    {
      onSuccess: async (response) => {
        // toast.success("Training session data loaded succesfully", {
        //   autoClose: 3000,
        // })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting training session data",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const endTraining: TrainingSessionProps = {
    trainingId: userTrainingSessionData?.trainingId!,
  }

  const endTrainingMutation = useMutation<any, any, TrainingSessionProps>(
    async () => {
      const res = await axios.post("/training-session/end", endTraining)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Training session ended!", { autoClose: 2000 })
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Session start error", {
          autoClose: 2000,
        })
      },
    }
  )

  const addTrainingSessionAnswersMutation = useMutation<
    any,
    any,
    AddUserAnswerRequest
  >(
    async (userAnswerData) => {
      const res = await axios.post("/user-answer", userAnswerData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Added answer succesfully!", { autoClose: 2000 })
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Add answer error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const handleNextClick = () => {
    if (
      userTrainingSessionData?.trainingQuestions?.[Number(questionindex)]
        .answerStatus == "not_answered" &&
      answersId.length !== 0
    ) {
      addTrainingSessionAnswersMutation.mutate({
        trainingSessionId: Number(trainingSessionId),
        questionId: questionsWithAnswers?.[Number(questionindex)].id,
        questionAnswerIds: answersId,
      })
    }
    setAnswersId([])
    navigate(
      `/training-session/${trainingSessionId}/training/${trainingId}/question/${
        Number(questionindex) + 1
      }`
    )
  }

  const handlePreviousClick = () => {
    if (
      userTrainingSessionData?.trainingQuestions?.[Number(questionindex)]
        .answerStatus === "not_answered" &&
      answersId.length !== 0
    ) {
      addTrainingSessionAnswersMutation.mutate({
        trainingSessionId: Number(trainingSessionId),
        questionId: questionsWithAnswers?.[Number(questionindex)].id,
        questionAnswerIds: answersId,
      })
    }
    setAnswersId([])
    navigate(
      `/training-session/${trainingSessionId}/training/${trainingId}/question/${
        Number(questionindex) - 1
      }`
    )
  }

  const handlePauseClick = () => {
    //TODO
    navigate("/trainings")
  }

  const handleFinishClick = () => {
    queryClient.removeQueries("/training-session")
    if (
      userTrainingSessionData?.trainingQuestions?.[Number(questionindex)]
        .answerStatus === "not_answered" &&
      Number(questionindex) == questionsWithAnswers?.length! - 1 &&
      answersId.length != 0
    ) {
      addTrainingSessionAnswersMutation.mutate({
        trainingSessionId: Number(trainingSessionId),
        questionId: questionsWithAnswers?.[Number(questionindex)].id,
        questionAnswerIds: answersId,
      })
    }
    endTrainingMutation.mutate(endTraining)
    handleOpen()
  }

  const [answersId, setAnswersId] = React.useState<number[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target
    if (checked) {
      setAnswersId([...answersId, Number(value)])
    } else {
      setAnswersId(answersId.filter((item) => item !== Number(value)))
    }
  }

  return (
    <Layout>
      <Container
        sx={{
          paddingX: 4,
          paddingY: 4,
          marginLeft: "auto",
          marginRight: "auto",
          flex: 1,
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
        }}
        maxWidth="xl"
      >
        <div className="flex h-screen justify-center ">
          <div className="flex flex-row w-[70%] p-8 space-x-8">
            <div className="flex flex-col w-[80%] border-4 border-gray-300 h-fit p-2 rounded-2xl bg-yellow-300">
              <div className="flex items-center h-64 justify-center rounded-xl border-4 border-yellow-200">
                <div>
                  {questionsWithAnswers &&
                    questionsWithAnswers?.[Number(questionindex)]?.question}
                </div>
              </div>
              <div className="flex h-80 flex-row space-x-8 ">
                {questionsWithAnswers?.[
                  Number(questionindex)
                ].QuestionAnswer?.map((answer) => (
                  <div
                    key={answer.id}
                    className="flex p-2 flex-col w-[25%] h-full"
                  >
                    <div
                      // style={{ backgroundColor: `${getRandomHtmlColor()}` }}
                      className="rounded-xl bg-purple-400 flex flex-col h-full"
                    >
                      <div>
                        <div className="float-right">
                          <Checkbox
                            onChange={handleChange}
                            checked={answersId.includes(answer.id!)}
                            value={answer.id!}
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
            <div className="flex flex-col space-y-2 w-[20%]">
              {Number(questionindex) == 0 ? (
                <div></div>
              ) : (
                <button
                  onClick={handlePreviousClick}
                  className="flex flex-col justify-center items-center rounded-2xl hover:bg-green-500 bg-gray-300 h-36 border-4 border-gray-400"
                >
                  <ChevronLeftIcon fontSize="large" />
                  <p className="pl-2 pr-2 pb-2">Previous</p>
                </button>
              )}
              {Number(questionindex) == questionsWithAnswers?.length! - 1 ? (
                <div></div>
              ) : (
                <button
                  onClick={handleNextClick}
                  className="flex flex-col justify-center items-center rounded-2xl hover:bg-green-500 bg-gray-300 h-36 border-4 border-gray-400"
                >
                  <ChevronRightIcon fontSize="large" />
                  <p className="pl-2 pr-2 pb-2">Next</p>
                </button>
              )}
              <button
                onClick={handlePauseClick}
                className="flex flex-col justify-center items-center rounded-2xl hover:bg-yellow-500 bg-gray-300  h-36 border-4 border-gray-400"
              >
                <p>Stop</p>
              </button>
              <button
                onClick={handleFinishClick}
                className="flex flex-col justify-center items-center rounded-2xl hover:bg-red-500 bg-gray-300  h-36 border-4 border-gray-400"
              >
                <p>Finish</p>
              </button>
            </div>
          </div>
        </div>
        <Modal open={isModalOpen} onClose={handleClose}>
          <Box sx={{ ...modalStyle, width: 400 }}>
            <h2 id="parent-modal-title">Results</h2>
            <p>
              Number of questions:{userTrainingSessionData?.totalQuestionCount}
            </p>
            <p>
              Number of correct answers:
              {userTrainingSessionData?.correctQuestionCount}
            </p>
            <div className="pt-4  text-center ">
              <Button
                type="submit"
                variant="contained"
                onClick={() => {
                  navigate("/trainings")
                }}
                style={{ borderRadius: 9999 }}
              >
                Continue
              </Button>
            </div>
          </Box>
        </Modal>
      </Container>
    </Layout>
  )
}
