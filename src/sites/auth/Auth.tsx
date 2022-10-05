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
        <div className="flex flex-row shadow-2xl border-gray border-2 min-h-full">
          <div className="flex-1 w-[55%] min-h-full ">
            {variant === "login" && <Login />}
            {variant === "register" && <Register />}
          </div>
          <div className="bg-blue-500 w-[45%] shadow-2xl border-gray border-2 hidden lg:block">
            <p>This will be image</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
