import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Layout } from "../../components/layout/Layout";
import Sidebar from "../../components/Sidebar";

const SettingsController = () => {
  return (
    <div className="p-2">
      <Stack spacing={2} direction={"column"}>
        <Button variant="contained">Zmień nazwę użytkownika</Button>
        <Button variant="contained">Zmień hasło</Button>
        <Button variant="contained">Usuń konto</Button>
      </Stack>
    </div>
  );
};

export const UserSettings = () => {
  return (
    <Layout>
      <div className="flex flex-row space-x-2 h-full bg-gray-300">
        <Sidebar />
        <SettingsController />
      </div>
    </Layout>
  );
};
