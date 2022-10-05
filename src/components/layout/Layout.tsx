import { Container } from "@mui/material"
import { FC } from "react"
import { ResponsiveAppBar } from "./ResponsiveAppBar"
interface LayoutProps {
  children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <ResponsiveAppBar />

      <Container
        sx={{
          paddingX: 4,
          paddingY: 4,
          marginLeft: "auto",
          marginRight: "auto",
          flex: 1,
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
        }}
        maxWidth="xl"
      >
        {children}
      </Container>
    </div>
  )
}
