import { Route, Routes } from "react-router-dom"
import { PATHS } from "../consts/paths"
import Tags from "../sites/admin/Tags/Tags"
import Users from "../sites/admin/Users/Users"
import { Auth } from "../sites/auth/Auth"
import { Panel } from "../sites/auth/Panel"
import { Home } from "../sites/Home"
import { CreateQuestionWithAnswers } from "../sites/trainings/CreateQuestionWithAnswers"
import { CreateTraining } from "../sites/trainings/CreateTraining"
import { EditQuestion } from "../sites/trainings/EditQuestion"
import { EditTraining } from "../sites/trainings/EditTraining"
import { ResumeTrainingSession } from "../sites/trainings/ResumeTrainingSession"
import { TrainingList } from "../sites/trainings/TrainingList"
import { TrainingSession } from "../sites/trainings/TrainingSession"
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
      <Route path={PATHS.editQuestion} element={<EditQuestion />} />
      <Route path={PATHS.editTraining} element={<EditTraining />} />
      <Route path={PATHS.trainingSession} element={<TrainingSession />} />
      <Route
        path={PATHS.trainingSessionResume}
        element={<ResumeTrainingSession />}
      />
      <Route path={PATHS.createTraining} element={<CreateTraining />} />
      <Route path={PATHS["admin-tags"]} element={<Tags />} />
      <Route path={PATHS["admin-users"]} element={<Users />} />
      <Route
        path={PATHS.createQuestion}
        element={<CreateQuestionWithAnswers />}
      />
    </Routes>
  )
}
