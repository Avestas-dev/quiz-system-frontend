import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import AddCircle from "@mui/icons-material/AddCircle"
import ArrowDropDown from "@mui/icons-material/ArrowDropDown"

export default function DropdownButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex flex-row bg-yellow-300 rounded-sm ">
      <Button
        id="basic-button"
        size="large"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        style={{ textTransform: "none" }}
        startIcon={<AddCircle />}
        endIcon={<ArrowDropDown />}
      >
        Utwórz quiz
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Jednokrotnego wyboru</MenuItem>
        <MenuItem onClick={handleClose}>Wielokrotnego wyboru</MenuItem>
      </Menu>
    </div>
  )
}
