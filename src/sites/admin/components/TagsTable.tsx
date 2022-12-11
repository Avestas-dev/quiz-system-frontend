import { Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { TagsResponse } from "../../../models/Api";

export function TagsTable() {
  const { data } = useQuery<any, any, TagsResponse>("/tag", async () => {
    const res = await axios.get(`/tag`);
    return res.data;
  });

  return (
    <div>
      <h1>Tagi</h1>
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nazwa taga</TableCell>
                <TableCell>Akcje</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((e) => (
                <>
                  <TableRow>
                    <TableCell>{e.id}</TableCell>
                    <TableCell>{e.name}</TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <Button>Zaakceptuj</Button>
                        <Button>Usuń</Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </TableContainer>
      </Paper>
    </div>
  );
}
