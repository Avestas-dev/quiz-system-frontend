import { Button, Stack, TableFooter } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useQuery } from "react-query";
import { GetAllUsersResponse, ProfileResponse } from "../../../models/Api";

export function UserTable() {
  const { data } = useQuery<any, any, GetAllUsersResponse>(
    "/admin/user/all",
    async () => {
      const res = await axios.get(`/admin/user/all`);
      return res.data;
    }
  );

  return (
    <div>
      <h1>Użytkownicy</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Stworzony</TableCell>
              <TableCell>Zaktualizowany</TableCell>
              <TableCell>Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((e) => (
              <>
                <TableRow>
                  <TableCell>{e.id}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>{e.isAdmin ? "Tak" : "Nie"}</TableCell>
                  <TableCell>{e.createdAt}</TableCell>
                  <TableCell>{e.updatedAt}</TableCell>
                  <TableCell>
                    <Stack spacing={2} direction="row">
                      <Button>Zablokuj</Button>
                      <Button>Odblokuj</Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
