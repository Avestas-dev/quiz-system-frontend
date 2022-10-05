import { gapi } from "gapi-script"
import { useEffect } from "react"
import { RouterProvider } from "react-router"
import { router } from "./navigation/router"
import { settings } from "./settings"

function App() {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: settings.clientId,
        scope: "",
      })
    }
    gapi.load("client:auth2", initClient)
  })

  return (
    <RouterProvider
      fallbackElement={<div>Error occured</div>}
      router={router}
    />
  )
}

export default App
