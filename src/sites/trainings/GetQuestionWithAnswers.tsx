import axios from "axios"
import { useQuery } from "react-query"
import { GetQuestionResponse } from "../../models/Api"
import MovieCreation from "@mui/icons-material/MovieCreation"
import AudioFile from "@mui/icons-material/AudioFile"
import Image from "@mui/icons-material/Image"
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
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined"
import { useNavigate } from "react-router"

interface GetQuestionWithAnswers {
  questionId?: string
}

export const GetQuestionWithAnswers = ({
  questionId,
}: GetQuestionWithAnswers) => {
  const navigate = useNavigate()

  const { data } = useQuery<any, any, GetQuestionResponse>(
    "/questions/all",
    async () => {
      const res = await axios.get(`/question/${questionId}`)
      return res.data
    }
  )

  return (
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
            <input
              placeholder={data?.question}
              id="large-input"
              className="placeholder:text-black placeholder:text-center bg-yellow-300 rounded-xl  w-full h-full"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-row space-x-8">
          {data?.QuestionAnswer?.map((e) => (
            <div className="flex flex-col ">
              <div className=" bg-purple-500 rounded-xl">
                <div className="float-right">
                  <Checkbox
                    icon={<RadioButtonUncheckedOutlinedIcon fontSize="small" />}
                    checkedIcon={
                      <CheckCircleOutlineOutlinedIcon
                        color="success"
                        fontSize="small"
                      />
                    }
                  />
                </div>
                <div className="float-left ">
                  <IconButton>
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <div className="float-left ">
                  <IconButton>
                    <ImageOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <div className="float-left ">
                  <IconButton>
                    <FunctionsOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <textarea
                  placeholder={e.answer}
                  className="w-full p-2 placeholder:align-middle placeholder:text-black placeholder:text-center  rounded-xl bg-purple-500"
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[60%] space-x-2 mt-2">
        <div className="float-left">
          <h1>tagi:</h1>
        </div>
        <div className="float-left">
          <Box sx={{ minWidth: 240 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Typ</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Age"
                onChange={() => {}}
              >
                <MenuItem value={10}>Wielokrotnego wyboru</MenuItem>
                <MenuItem value={10}>Jednokrotnego wyboru</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="float-left">
          <Box sx={{ minWidth: 180 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Czas</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Age"
                onChange={() => {}}
              >
                <MenuItem value={10}>Czas: 30 sekund</MenuItem>
                <MenuItem value={10}>Czas: 60 sekund</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="float-left">
          <Box sx={{ minWidth: 120 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Temat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Age"
                onChange={() => {}}
              >
                <MenuItem value={10}>Temat1</MenuItem>
                <MenuItem value={10}>Temat2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="float-right">
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
            }}
          >
            Anuluj
          </Button>
        </div>
        <div className="float-right">
          <Button
            onClick={() => {
              navigate("/trainings")
            }}
            variant="contained"
            style={{
              backgroundColor: "black",
            }}
          >
            Zapisz
          </Button>
        </div>
      </div>
    </>
  )
}
