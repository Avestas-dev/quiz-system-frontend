export const PATHS = {
  home: "/",
  login: "/login",
  register: "/register",
  panel: "/panel",
  trainings: "/trainings",
  training: "/training/:id",
  editTraining: "/training/edit/:id",
  trainingSession:
    "/training-session/:trainingSessionId/training/:trainingId/question/:questionindex",
  trainingSessionResume:
    "/training-session/resume/:trainingSessionId/training/:trainingId/question/:questionIndex",
  editQuestion: "/question/edit/:id",
  createTraining: "/training/create/:type",
  createQuestion: "/question/create/:trainingId",
  "forget-password": "/forget-password",
  "admin-tags": "/admin/tags",
  "admin-users": "/admin/users",
}
