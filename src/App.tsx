import { Route, RouterProvider } from "react-router"
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { PATHS } from "./consts/paths"
import { Auth } from "./sites/auth/Auth"
import { Home } from "./sites/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={PATHS.home}
      element={<Home />}
      errorElement={<div>Error occured. Website not found.</div>}
    >
      <Route path={PATHS.login} element={<Auth variant="login" />}></Route>
      <Route
        path={PATHS.register}
        element={<Auth variant="register" />}
      ></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider
      fallbackElement={<div>Error occured</div>}
      router={router}
    />
  )
}

export default App
