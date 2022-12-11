import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AddTagAdminRequest } from "../../../models/Api";

export function AdminPostTag() {
  const postTagMutation = useMutation<any, any, AddTagAdminRequest>(
    async (postTag) => {
      const res = await axios.post("/admin/tag", postTag);
      return res.data;
    },
    {
      onSuccess: async (response) => {
        toast.success("Added tag succesfully!", { autoClose: 2000 });
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Add tag error.", {
          autoClose: 2000,
        });
      },
    }
  );
  return (
    <div>
      <Stack spacing={3} direction={"row"}>
        <TextField
          id="tagValue"
          label="Tag do dodania"
          variant="filled"
        ></TextField>
        <Button variant="outlined">Dodaj tag</Button>
      </Stack>
    </div>
  );
}
