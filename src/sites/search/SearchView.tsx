import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { Layout } from "../../components/layout/Layout";
import Sidebar from "../../components/Sidebar";
import SearchIcon from "@mui/icons-material/Search";

export const SearchView = () => {
  return (
    <Layout>
      <div className="flex flex-row space-x-2 bg-gray-200">
        <Sidebar />
        <div>
          <div className="absolute top-[50%] left-[50%]">
            <h1 className="text-center text-4xl">
              Czego chcesz się dziś nauczyć?
            </h1>
            <Stack spacing={2} direction={"row"}>
              <TextField
                fullWidth
                id="searchedValue"
                placeholder="Szukaj quizów na każdy temat!"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <Button variant="outlined">Wyszukaj</Button>
            </Stack>
          </div>
        </div>
      </div>
    </Layout>
  );
};
