import { TextField } from "@mui/material"
import { Layout } from "../components/layout/Layout"

export const Home = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div>
          <p>Home Page</p>
        </div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </Layout>
  )
}
