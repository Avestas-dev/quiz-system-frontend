import { Layout } from "../../components/layout/Layout"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

type AuthProps = {
  variant: "login" | "register"
}

export const Auth = ({ variant }: AuthProps) => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="bg-red-500 w-[55%]">
          {variant === "login" && <Login />}
          {variant === "register" && <Register />}
        </div>
        <div className="bg-blue-500 w-[45%]">
          <p>test</p>
        </div>
      </div>
    </Layout>
  )
}
