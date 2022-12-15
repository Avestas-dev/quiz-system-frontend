import axios, { AxiosError } from "axios"
import React, { createContext, ReactElement, useEffect, useState } from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router"
import { PATHS } from "../consts/paths"
import { LoginResponse, ProfileResponse } from "../models/Api"

export const UserContext = createContext({
  userId: -1,
  setUserId: (prevState: number) => {},
  isLoggedIn: false,
  setIsLoggedIn: (prevState: boolean) => {},
  token: "",
  setToken: (prevState: string) => {},
  refreshToken: "",
  setRefreshToken: (prevState: string) => {},
  email: "",
  setEmail: (prevState: string) => {},
  login: ({
    userId,
    token,
    refreshToken,
    email,
    remember,
  }: LoginResponse & { remember: boolean }) => {},
  logout: () => {},
})

export const UserContextProvider: React.FC<{
  children: ReactElement<any, any>
}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState(localStorage.getItem("email") || "")
  const [userId, setUserId] = useState(
    Number(localStorage.getItem("userId")) || -1
  )
  const [token, setToken] = useState(localStorage.getItem("token") || "")
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || ""
  )
  if (localStorage.getItem("token") && localStorage.getItem("refreshToken")) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "token"
    )}`
    axios.defaults.headers.common.Refresh = localStorage.getItem("refreshToken")
  }

  const login = ({
    token,
    refreshToken,
    email,
    remember,
    userId,
  }: LoginResponse & { remember: boolean }) => {
    if (token && refreshToken && email) {
      if (userId !== undefined) setUserId(userId)
      console.log("user ID", userId)
      setEmail(email)
      setToken(token)
      setRefreshToken(refreshToken)
      setIsLoggedIn(true)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      axios.defaults.headers.common.Refresh = refreshToken
      if (remember) {
        localStorage.setItem("token", token)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("email", email)
        if (userId !== undefined)
          localStorage.setItem("userId", userId.toString())
      } else {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("email")
      }
    }
  }
  const navigate = useNavigate()
  const checkUserMutation = useMutation<ProfileResponse, AxiosError>(
    async () => {
      const res = await axios.post("/profile", null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          refresh: localStorage.getItem("refreshToken"),
        },
      })
      return res.data
    },
    {
      onSuccess: async (response) => {
        login({
          remember: true,
          email: response?.email,
          refreshToken: localStorage.getItem("refreshToken") as string,
          token: localStorage.getItem("token") as string,
        })
      },
      onError: (error) => {
        // navigate(PATHS.home)
      },
    }
  )
  // checking, if provided credentials are valid
  useEffect(() => {
    checkUserMutation.mutate()
  }, [])

  const logout = () => {
    setEmail("")
    setToken("")
    setRefreshToken("")
    setUserId(-1)
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("email")
    localStorage.removeItem("userId")
    axios.defaults.headers.common.Authorization = null
    axios.defaults.headers.common.Refresh = null
    setIsLoggedIn(false)
    navigate(PATHS.login)
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        userId: userId,
        setUserId: setUserId,
        email: email,
        token: token,
        refreshToken: refreshToken,
        login: login,
        setToken: setToken,
        setRefreshToken: setRefreshToken,
        setEmail: setEmail,
        logout: logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
