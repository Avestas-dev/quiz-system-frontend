import Button from "@mui/material/Button"
import axios, { AxiosError } from "axios"
import { useContext } from "react"
import { useMutation } from "react-query"
import { toast } from "react-toastify"
import { Layout } from "../../components/layout/Layout"
import { UserContext } from "../../contexts/UserContext"
import { ProfileResponse } from "../../models/Api"

type PanelProps = {}

export const Panel = ({}: PanelProps) => {
  const userContext = useContext(UserContext)

  const profileMutation = useMutation<ProfileResponse, AxiosError>(
    async () => {
      const res = await axios.post("/profile")
      return res.data
    },
    {
      onSuccess: async (response) => {
        console.log("success")
        toast.success(response.email, { autoClose: 5000 })
      },
      onError: (error) => {
        console.log("error")
        toast.error("Błąd profilu", { autoClose: 3000 })
      },
    }
  )
  return (
    <div className="flex">
      <Layout>
        <>
          <h1>User email: </h1>
          <p>{userContext.email}</p>
          <h1>User token: </h1>
          <p>{userContext.token}</p>
          <h1>User refresh token: </h1>
          <p>{userContext.refreshToken}</p>

          <Button onClick={() => profileMutation.mutate()} title="test">
            test
          </Button>
        </>
      </Layout>
    </div>
  )
}
