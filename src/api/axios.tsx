import axios, { AxiosRequestConfig } from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use(
  async (config: AxiosRequestConfig<any>) => {
    const token = localStorage.getItem("token")
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err?.config

    if (err.response) {
      if (
        err.response.status === 401 &&
        !originalConfig._retry &&
        err.response.data.code === "TOKEN_EXPIRED"
      ) {
        originalConfig._retry = true
        console.log(err.response)

        try {
          const refreshToken = localStorage.getItem("refreshToken")
          const token = localStorage.getItem("token")
          const newRefreshToken = await axios.get("/refresh", {
            headers: {
              refresh: (refreshToken as string) || "dupa",
              authorization: token,
            },
          })
          const accessToken = newRefreshToken.data.token
          localStorage.setItem("token", accessToken)

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`

          return axios(originalConfig)
        } catch (error: any) {
          if (
            error?.response &&
            error?.response?.data &&
            axios.defaults.baseURL
          ) {
            window.location.href = axios.defaults.baseURL
            return Promise.reject(error.response.data)
          }
          console.log(error)
          window.location.href = "axios.defaults.baseURL"
          return Promise.reject(error)
        }
      }
    }
    return Promise.reject(err)
  }
)
