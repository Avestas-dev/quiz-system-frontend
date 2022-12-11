import { Stack } from "@mui/material";
import { Layout } from "../../components/layout/Layout";
import Sidebar from "../../components/Sidebar";
import { TagsTable } from "./components/TagsTable";
import { UserTable } from "./components/UserTable";

const DrawQuizPanel = () => {
  return (
    <div className="flex">
      <Stack spacing={2} direction="row">
        <div className="w-1/2">
          <UserTable />
        </div>
        <div className="grow" />
        <div className="w-1/2">
          <TagsTable />
        </div>
      </Stack>
    </div>
  );
};

export const AdminPanel = () => {
  return (
    <Layout>
      <div className="flex flex-row space-x-2 h-full bg-gray-300">
        <Sidebar />
        <DrawQuizPanel />
      </div>
    </Layout>
  );
};
