import { FC } from "react"
import { ResponsiveAppBar } from "./ResponsiveAppBar"

interface LayoutProps {
  children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ flex: 1, width: "100%", height: "100%" }}>
      <ResponsiveAppBar />
      {children}
    </div>
  )
}
