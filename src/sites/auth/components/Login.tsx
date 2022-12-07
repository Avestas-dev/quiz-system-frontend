import { yupResolver } from "@hookform/resolvers/yup"
import LoginIcon from "@mui/icons-material/Login"
import { Button } from "@mui/material"
import { useContext, useState } from "react"
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { CheckboxControl } from "../../../components/CheckboxControl"

import axios from "axios"
import { toast } from "react-toastify"
import { InputControl } from "../../../components/InputControl"
import { PATHS } from "../../../consts/paths"
import yup from "../../../consts/yupLocaleEN"
import { UserContext } from "../../../contexts/UserContext"
import {
  LoginGoogleRequest,
  LoginRequest,
  LoginResponse,
} from "../../../models/Api"
import { settings } from "../../../settings"
import { GoogleSignInButton } from "./GoogleSignInButton"

const loginValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  remember: yup.boolean().required(),
})

type LoginFormProps = {
  email: string
  password: string
  remember: boolean
}

export const Login = () => {
  const { control, handleSubmit, watch } = useForm<LoginFormProps>({
    resolver: yupResolver(loginValidationSchema),
    reValidateMode: "onChange",
  })

  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false)

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const idToken = (res as GoogleLoginResponse).tokenObj.id_token

    if (idToken) {
      loginGoogleMutation.mutate({ tokenId: idToken })
    }
  }

  const onFailure = (err: any) => {
    console.log("failed:", err)
  }

  const loginGoogleMutation = useMutation<
    LoginResponse,
    any,
    LoginGoogleRequest
  >(
    async (loginData) => {
      const res = await axios.post("/login-google", loginData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        userContext.login({
          remember: watch("remember"),
          email: response?.email,
          refreshToken: response?.refreshToken,
          token: response?.token,
          userId: response?.userId,
        })
        toast.success("Logged in successfully!", { autoClose: 3000 })
        navigate("/panel")
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Login error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const loginMutation = useMutation<LoginResponse, any, LoginRequest>(
    async (loginData) => {
      const res = await axios.post("/login", loginData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        userContext.login({
          remember: watch("remember"),
          email: response?.email,
          refreshToken: response?.refreshToken,
          token: response?.token,
          userId: response?.userId,
        })
        toast.success("Logged in successfully!", { autoClose: 3000 })
        navigate("/panel")
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Login error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const onSubmit = (props: LoginFormProps) => {
    console.log(props)
    loginMutation.mutate(props)
  }

  return (
    <div className="flex max-w-[70%] h-[100%] ml-auto mr-auto justify-center flex-col  flex-wrap px-2 py-4 pb-10">
      <div className="flex">
        <h1>Login</h1>
      </div>
      <div className="pt-4">
        <p>Sign in today and start learning!</p>
      </div>

      <div className="flex rounded-md justify-center pt-10">
        <GoogleLogin
          style={{ borderRadius: 100 }}
          clientId={settings.clientId}
          buttonText="Log in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          autoLoad={false}
          onRequest={() => setIsGoogleSignInLoading(true)}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
          render={({ onClick }) => (
            <GoogleSignInButton
              buttonText="SIGN IN WITH GOOGLE"
              onClick={onClick}
            />
          )}
        />
      </div>

      <div className="flex text-gray-600 flex-row h-min w-full pt-8 pb-8">
        <p className="w-full bg-gray-500 h-[2px] self-center"></p>
        <p className="w-full mr-0 pr-0 text-center font-light">
          Or sign in with email
        </p>
        <p className="w-full bg-gray-500 h-[2px] self-center"></p>
      </div>

      <form>
        <div className="flex flex-col space-y-4 ">
          <InputControl
            control={control}
            name="email"
            label="Email"
            autoFocus
            autoComplete="email"
            type="email"
            inputProps={{ inputMode: "email" }}
            defaultValue="kamilporeba@hotmail.com"
          />
          <InputControl
            control={control}
            name="password"
            label="Password"
            type="password"
            inputProps={{ hidden: true }}
            defaultValue="Kamil123!"
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
          type="submit"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          style={{ borderRadius: 9999 }}
          startIcon={<LoginIcon />}
        >
          Sign in
        </Button>
      </form>
      <Link to={PATHS.register} className="flex pt-3">
        <p>Not yet registered?</p>
        <p className="pl-2 font-bold text-[#3b83f6]">Sign up now!</p>
      </Link>
    </div>
  )
}
