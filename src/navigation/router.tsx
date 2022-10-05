import { createBrowserRouter } from "react-router-dom"
import { PATHS } from "../consts/paths"
import { Auth } from "../sites/auth/Auth"
import { ForgetPassword } from "../sites/auth/ForgetPassword"
import { Home } from "../sites/Home"

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    errorElement: <div>Error occured. Website not found.</div>,
    element: <Home />,
  },
  {
    path: PATHS.login,
    element: <Auth variant="login" />,
  },
  {
    path: PATHS.register,
    element: <Auth variant="register" />,
  },
  {
    path: PATHS["forget-password"],
    element: <ForgetPassword />,
  },
])
