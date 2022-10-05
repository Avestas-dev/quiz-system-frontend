import LoginIcon from "@mui/icons-material/Login"
import { Button } from "@mui/material"
import { useState } from "react"
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"
import { useForm } from "react-hook-form"
import { Input } from "../../../components/Input"
import { settings } from "../../../settings"
import { GoogleSignInButton } from "./GoogleSignInButton"
type LoginFormProps = {
  email: string
  password: string
}

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormProps>()
  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false)

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("success:", res)
  }

  const onFailure = (err: any) => {
    console.log("failed:", err)
  }

  const onSubmit = (props: LoginFormProps) => {
    console.log(props)
  }

  return (
    <div className="flex max-w-[70%] ml-auto mr-auto justify-center flex-col  flex-wrap px-2 py-4 self-center">
      <div className="flex">
        <h1 className="">Login</h1>
      </div>
      <div className="pt-4">
        <p>Sign in today and start learning!</p>
      </div>

      <div className="flex rounded-md justify-center pt-10">
        <GoogleLogin
          style={{ borderRadius: 100 }}
          clientId={settings.clientId}
          buttonText="Zaloguj się z Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          onRequest={() => setIsGoogleSignInLoading(true)}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          render={({ onClick }) => <GoogleSignInButton onClick={onClick} />}
        />
      </div>

      <div className="flex text-gray-600 flex-row h-min w-full pt-8 pb-8">
        <p className="w-full bg-gray-500 h-[2px] self-center"></p>
        <p className="w-full mr-0 pr-0 text-center font-light">
          Or sign in with email
        </p>
        <p className="w-full bg-gray-500 h-[2px] self-center"></p>
      </div>

      <div className="flex flex-col space-y-4 ">
        <Input
          control={control}
          name="email"
          label="Email"
          autoFocus
          autoComplete="email"
          type="email"
          inputProps={{ inputMode: "email" }}
        />
        <Input
          control={control}
          name="password"
          label="Password"
          type="password"
          inputProps={{ hidden: true }}
        />
        <Button
          variant="contained"
          onClick={() => handleSubmit(onSubmit)}
          style={{ borderRadius: 9999 }}
          startIcon={<LoginIcon />}
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}
