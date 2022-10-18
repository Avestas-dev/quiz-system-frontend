import { yupResolver } from "@hookform/resolvers/yup"
import LoginIcon from "@mui/icons-material/Login"
import { Button } from "@mui/material"
import { useState } from "react"
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { CheckboxControl } from "../../../components/CheckboxControl"

import { InputControl } from "../../../components/InputControl"
import { PATHS } from "../../../consts/paths"
import yup from "../../../consts/yupLocaleEN"
import { settings } from "../../../settings"
import { GoogleSignInButton } from "./GoogleSignInButton"

const loginValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
  remember: yup.boolean().required(),
})

type LoginFormProps = {
  email: string
  password: string
  remember: boolean
}

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormProps>({
    resolver: yupResolver(loginValidationSchema),
    reValidateMode: "onChange",
  })
  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false)

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("success:", res)
  }

  const onFailure = (err: any) => {
    console.log("failed:", err)
  }

  const onSubmit = (props: LoginFormProps) => {
    console.log(props)
    console.log("test")
  }

  return (
    <div className="flex max-w-[70%] h-[100%] ml-auto mr-auto justify-center flex-col  flex-wrap px-2 py-4 pb-10">
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
        <InputControl
          control={control}
          name="email"
          label="Email"
          autoFocus
          autoComplete="email"
          type="email"
          inputProps={{ inputMode: "email" }}
        />
        <InputControl
          control={control}
          name="password"
          label="Password"
          type="password"
          inputProps={{ hidden: true }}
        />
      </div>

      <div className="flex flex-row pt-4 pb-4">
        <CheckboxControl
          control={control}
          name="remember"
          aria-label="test"
          label="Remember me"
          defaultChecked={false}
        />
        <Link
          to={PATHS["forget-password"]}
          className="self-center ml-auto text-[#3b83f6] font-semibold px-1 py-1"
        >
          <p>Forget password?</p>
        </Link>
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit(onSubmit)}
        style={{ borderRadius: 9999 }}
        startIcon={<LoginIcon />}
      >
        Sign in
      </Button>

      <Link to={PATHS.register} className="flex pt-3">
        <p>Not yet registered?</p>
        <p className="pl-2 font-bold text-[#3b83f6]">Sign up now!</p>
      </Link>
    </div>
  )
}
