import { Route, Routes } from "react-router-dom"
import { PATHS } from "../consts/paths"
import { Auth } from "../sites/auth/Auth"
import { Panel } from "../sites/auth/Panel"
import { Home } from "../sites/Home"
import { EditTraining } from "../sites/trainings/components/EditTraining"
import { CreateTraining } from "../sites/trainings/CreateTraining"
import { TrainingList } from "../sites/trainings/TrainingList"
import { TrainingView } from "../sites/trainings/TrainingView"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.login} element={<Auth variant="login" />} />
      <Route path={PATHS.register} element={<Auth variant="register" />} />
      <Route path={PATHS.panel} element={<Panel />} />
      <Route path={PATHS.trainings} element={<TrainingList />} />
      <Route path={PATHS.training} element={<TrainingView />} />
      <Route path={PATHS.createTraining} element={<CreateTraining />} />
      <Route path={PATHS.editTraining} element={<EditTraining />} />
    </Routes>
  )
}
