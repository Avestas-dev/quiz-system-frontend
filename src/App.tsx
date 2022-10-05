import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { PATHS } from "./consts/paths"
import { Auth } from "./sites/auth/Auth"
import { Home } from "./sites/Home"

const router = createBrowserRouter([
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
])

function App() {
  return (
    <RouterProvider
      fallbackElement={<div>Error occured</div>}
      router={router}
    />
  )
}

export default App
