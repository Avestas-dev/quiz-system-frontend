import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Test!</div>,
  },
])

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  )
}

export default App
