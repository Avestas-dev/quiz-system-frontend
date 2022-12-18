import AdbIcon from "@mui/icons-material/Adb"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PATHS } from "../../consts/paths"
import { UserContext } from "../../contexts/UserContext"

type availabilityType = "not_logged_in" | "user" | "admin"
const pages: {
  name: string
  path: string
  availability: availabilityType
}[] = [
  { name: "Home", path: PATHS.home, availability: "not_logged_in" },
  { name: "Login", path: PATHS.login, availability: "not_logged_in" },
  { name: "Register", path: PATHS.register, availability: "not_logged_in" },
  { name: "Trainings", path: PATHS.trainings, availability: "user" },
  { name: "Tags", path: PATHS["admin-tags"], availability: "admin" },
  { name: "Users", path: PATHS["admin-users"], availability: "admin" },
]
const settings: {
  name: string
  path: string
  availability: availabilityType
}[] = [
  { name: "Home", path: PATHS.home, availability: "not_logged_in" },
  { name: "Login", path: PATHS.login, availability: "not_logged_in" },
  { name: "Register", path: PATHS.register, availability: "not_logged_in" },
  { name: "Trainings", path: PATHS.trainings, availability: "user" },
  { name: "Tags", path: PATHS["admin-tags"], availability: "admin" },
  { name: "Users", path: PATHS["admin-users"], availability: "admin" },
]

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const { isAdmin, isLoggedIn, logout } = useContext(UserContext)
  const getAvailability = React.useCallback((): availabilityType => {
    if (isAdmin) return "admin"
    else if (isLoggedIn) return "user"
    else return "not_logged_in"
  }, [])
  const [availability, setAvailability] = React.useState<availabilityType>(
    getAvailability()
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  useEffect(() => {
    setAvailability(getAvailability)
  }, [isAdmin, isLoggedIn, getAvailability])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages
                .filter(
                  (page) =>
                    page.availability === availability ||
                    (availability === "admin" &&
                      page.availability !== "not_logged_in")
                )
                .map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter(
                (page) =>
                  page.availability === availability ||
                  (availability === "admin" &&
                    page.availability !== "not_logged_in")
              )
              .map((page) => (
                <Link key={page.name} to={page.path}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings
                .filter(
                  (setting) =>
                    setting.availability === availability ||
                    (availability === "admin" &&
                      setting.availability !== "not_logged_in")
                )
                .map((setting) => (
                  <Link key={setting.name} to={setting.path}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              <MenuItem
                onClick={() => {
                  logout()
                  handleCloseUserMenu()
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
