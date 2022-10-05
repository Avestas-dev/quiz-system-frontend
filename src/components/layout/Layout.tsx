import { FC } from "react"
import { ResponsiveAppBar } from "./ResponsiveAppBar"
interface LayoutProps {
  children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <ResponsiveAppBar />
      {/* <Container
        sx={{ minHeight: "100%", backgroundColor: "red" }}
        maxWidth="xl"
        fixed
      > */}
      <div className="px-2 py-4 ml-auto mr-auto flex flex-col flex-grow w-full bg-red-50">
        {children}
      </div>
      {/* </Container> */}
    </div>
  )
}
