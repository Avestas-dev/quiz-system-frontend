import Container from "@mui/material/Container"
import { FC } from "react"
import { ResponsiveAppBar } from "./ResponsiveAppBar"
interface LayoutProps {
  children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <div className="px-2 py-4 ml-auto mr-auto">{children}</div>
      </Container>
    </div>
  )
}
