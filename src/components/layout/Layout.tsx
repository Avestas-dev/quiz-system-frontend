import { Container } from "@mui/material"
import { FC } from "react"
import Sidebar from "../Sidebar"
import { ResponsiveAppBar } from "./ResponsiveAppBar"
interface LayoutProps {
  children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <ResponsiveAppBar />
      <div>{children}</div>
    </div>
  )
}
