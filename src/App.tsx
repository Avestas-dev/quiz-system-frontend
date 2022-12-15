import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { gapi } from "gapi-script"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AppLoader } from "./components/AppLoader"
import { UserContextProvider } from "./contexts/UserContext"
import { settings } from "./settings"

function App() {
  useEffect(() => {
    // initializing google login
    const initClient = () => {
      gapi.client.init({
        clientId: settings.clientId,
        scope: "",
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])
  // initializing token and refresh token
  const queryClient = new QueryClient()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <UserContextProvider>
            <AppLoader />
          </UserContextProvider>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </LocalizationProvider>
  )
}

export default App
