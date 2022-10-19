import { yupResolver } from "@hookform/resolvers/yup"
import LoginIcon from "@mui/icons-material/Login"
import { Button } from "@mui/material"
import { useContext, useState } from "react"
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"

import axios from "axios"
import { toast } from "react-toastify"
import { InputControl } from "../../../components/InputControl"
import { PATHS } from "../../../consts/paths"
import yup from "../../../consts/yupLocaleEN"
import { UserContext } from "../../../contexts/UserContext"
import {
  RegisterGoogleRequest,
  RegisterGoogleResponse,
  RegisterRequest,
  RegisterResponse
} from "../../../models/Api"
import { settings } from "../../../settings"
import { GoogleSignInButton } from "./GoogleSignInButton"

const registerValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordRepeated: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})

type RegisterFormProps = {
  email: string
  password: string
  passwordRepeated: string
}

export const Register = () => {
  const { control, handleSubmit, watch } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerValidationSchema),
    reValidateMode: "onChange",
  })

  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false)

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const idToken = (res as GoogleLoginResponse).tokenObj.id_token
    console.log(res)
    if (idToken) {
      registerGoogleMutation.mutate({ tokenId: idToken })
    }
  }

  const onFailure = (err: any) => {
    console.log("failed:", err)
  }

  const registerMutation = useMutation<RegisterResponse, any, RegisterRequest>(
    async (registerData) => {
      const res = await axios.post("/register", registerData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Signed up successfully!", { autoClose: 2000 })
        navigate("/login")
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Register error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const registerGoogleMutation = useMutation<
    RegisterGoogleResponse,
    any,
    RegisterGoogleRequest
  >(
    async (registerData) => {
      const res = await axios.post("/register-google", registerData)
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Signed up successfully!", { autoClose: 2000 })
        navigate("/login")
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Register error.", {
          autoClose: 2000,
        })
      },
    }
  )

  const onSubmit = (props: RegisterFormProps) => {
    registerMutation.mutate(props)
  }

  return (
    <div className="flex max-w-[70%] h-[100%] ml-auto mr-auto justify-center flex-col  flex-wrap px-2 py-4 pb-10">
      <div className="flex">
        <h1>Register</h1>
      </div>
      <div className="pt-4">
        <p>Sign up today and start learning!</p>
      </div>

      <div className="flex rounded-md justify-center pt-10">
        <GoogleLogin
          style={{ borderRadius: 100 }}
          clientId={settings.clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          autoLoad={false}
          onRequest={() => setIsGoogleSignInLoading(true)}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
          render={({ onClick }) => (
            <GoogleSignInButton
              buttonText="SIGN UP WITH GOOGLE"
              onClick={onClick}
            />
          )}
        />
      </div>

      <div className="flex text-gray-600 flex-row h-min w-full pt-8 pb-8">
        <p className="w-full bg-gray-500 h-[2px] self-center"></p>
        <p className="w-full mr-0 pr-0 text-center font-light">
          Or sign up with email
        </p>
        <p className="w-full bg-gray-500 h-[2px] self-center"></p>
      </div>

      <form>
        <div className="flex flex-col space-y-4 pb-4">
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
          <InputControl
            control={control}
            name="passwordRepeated"
            label="Password repeated"
            type="password"
            inputProps={{ hidden: true }}
            defaultValue="Kamil123!"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          style={{ borderRadius: 9999 }}
          startIcon={<LoginIcon />}
        >
          Sign up
        </Button>
      </form>

      <div className="flex pt-3">
        <p>Already registered?</p>
        <Link to={PATHS.register}>
          <p className="pl-2 font-bold text-[#3b83f6]">Log in now!</p>
        </Link>
      </div>
    </div>
  )
}
