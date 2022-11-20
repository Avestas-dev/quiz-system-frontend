import { Route, Routes } from "react-router-dom"
import { PATHS } from "../consts/paths"
import { Auth } from "../sites/auth/Auth"
import { Panel } from "../sites/auth/Panel"
import { Home } from "../sites/Home"
import { AdminPanel } from "../sites/auth/AdminPanel"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.login} element={<Auth variant="login" />} />
      <Route path={PATHS.register} element={<Auth variant="register" />} />
      <Route path={PATHS.panel} element={<Panel />} />
      <Route path={PATHS.adminPanel} element={<AdminPanel />} />
    </Routes>
  )
}
