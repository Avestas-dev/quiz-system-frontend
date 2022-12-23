import { Container } from "@mui/material"
import { Layout } from "../../components/layout/Layout"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

type AuthProps = {
  variant: "login" | "register"
}

export const Auth = ({ variant }: AuthProps) => {
  return (
    <div className="flex">
      <Layout>
        <Container
          sx={{
            paddingX: 4,
            paddingY: 4,
            marginLeft: "auto",
            marginRight: "auto",
            flex: 1,
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
          }}
          maxWidth="xl"
        >
          {variant === "login" && <Login />}
          {variant === "register" && <Register />}
        </Container>
      </Layout>
    </div>
  )
}
