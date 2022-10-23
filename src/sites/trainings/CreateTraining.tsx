import { yupResolver } from "@hookform/resolvers/yup"
import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { InputControl } from "../../components/InputControl"
import { Layout } from "../../components/layout/Layout"
import yup from "../../consts/yupLocaleEN"

export const CreateTraining = () => {
  const addQuestionValidationSchema = yup.object().shape({
    content: yup.string().required().email(),
  })

  type AddQuestionFormProps = {
    question: string
    answer: string
  }

  var questions = [
    { content: "question1 dfkfmslgfdsg", answers: ["answer1", "answer2"] },
    { content: "question2", answers: [] },
    { content: "question3", answers: [] },
    { content: "question4", answers: [] },
  ]

  const { control, handleSubmit, watch } = useForm<AddQuestionFormProps>({
    resolver: yupResolver(addQuestionValidationSchema),
    reValidateMode: "onChange",
  })

  return (
    <div className="flex">
      <Layout>
        <div className="flex flex-row shadow-2xl border-gray border-2 min-h-full">
          <div className="flex-1 w-[50%] min-h-full ">
            <div className="flex max-w-[70%]  ml-auto mr-auto justify-center flex-col ">
              <div className="flex flex-col space-y-4 ">
                <div className="flex pt-10">
                  <h1>Create training</h1>
                </div>

                <InputControl
                  control={control}
                  name="question"
                  label="Quiz name"
                  autoFocus
                  inputProps={{ inputMode: "text" }}
                  defaultValue=""
                />
                <div className="flex pt-2">
                  <h1>Accesibility</h1>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="accesibility"
                    id="accesibility"
                  />
                  <p className="pl-2">Private</p>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="accesibility"
                    id="accesibility"
                  />
                  <p className="pl-2">Public</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-[50%] min-h-full ">
            <div className="flex max-w-[70%]  ml-auto mr-auto justify-center flex-col ">
              <div className="flex flex-col space-y-4 ">
                <div className="flex pt-10">
                  <h1>Questions:</h1>
                </div>
                <InputControl
                  control={control}
                  name="question"
                  label="Question"
                  autoFocus
                  inputProps={{ inputMode: "text" }}
                  defaultValue=""
                />
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ borderRadius: 9999 }}
                  startIcon={<Add />}
                >
                  Add Question
                </Button>
              </div>
              <ul className="list-decimal">
                {questions.map((question) => (
                  <div>
                    <li className="font-bold mb-2">
                      {question.content}
                      <Button>Add Answer</Button>
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        className="peer"
                      />
                    </li>
                    <div className="pl-2">
                      {question.answers.map((answers) => (
                        <>
                          <div className="flex mb-2 items-center border-2 ">
                            <div className="w-full text-grey-darkest">
                              {answers}
                            </div>
                            <Button>Edit</Button>
                            <Button>Remove</Button>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
