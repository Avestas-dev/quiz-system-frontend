import { Stack } from "@mui/material";
import { Layout } from "../../components/layout/Layout";
import Sidebar from "../../components/Sidebar";
import { TagsTable } from "./components/TagsTable";
import { UserTable } from "./components/UserTable";
import { AdminPostTag } from "./components/AdminPostTag";

const DrawAdminPanel = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <div>
          <UserTable />
        </div>
        <div className="grow" />
        <div>
          <Stack spacing={2}>
            <TagsTable />
            <AdminPostTag />
          </Stack>
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
        <DrawAdminPanel />
      </div>
    </Layout>
  );
};
