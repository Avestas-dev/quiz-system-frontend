import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import { Layout } from "../../components/layout/Layout"
import MovieCreation from "@mui/icons-material/MovieCreation"
import AudioFile from "@mui/icons-material/AudioFile"
import Image from "@mui/icons-material/Image"

export const CreateTraining = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen items-center">
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
                placeholder="Wprowadź swoje pytanie tutaj"
                id="large-input"
                className="placeholder:text-black placeholder:text-center bg-yellow-300 rounded-xl  w-full h-full"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="flex w-1/4 ">
              <textarea
                placeholder="Wpisz swoją odpowiedź tutaj"
                className="placeholder:text-black placeholder:text-center rounded-xl bg-purple-500 w-full h-full"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className="flex w-1/4 ">
              <textarea
                placeholder="Wpisz swoją odpowiedź tutaj"
                className="placeholder:text-black placeholder:text-center rounded-xl bg-green-500 w-full h-full"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className="flex w-1/4 ">
              <textarea
                placeholder="Wpisz swoją odpowiedź tutaj"
                className="placeholder:text-black placeholder:text-center rounded-xl bg-blue-500 w-full h-full"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className="flex w-1/4 ">
              <textarea
                placeholder="Wpisz swoją odpowiedź tutaj"
                className="placeholder:text-black placeholder:text-center rounded-xl bg-red-500 w-full h-full"
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[60%] space-x-2 mt-2">
          <h1>tagi:</h1>
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
          <Button>Anuluj</Button>
          <Button>Zapisz</Button>
        </div>
      </div>
    </Layout>
  )
}
