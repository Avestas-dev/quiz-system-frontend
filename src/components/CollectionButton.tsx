import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Folder from "@mui/icons-material/Folder"
import ArrowDropDown from "@mui/icons-material/ArrowDropDown"

export default function CollectionButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex flex-row bg-white border-1 shadow-xl  border-black rounded-2xl ">
      <Button
        id="basic-button"
        size="large"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        style={{ textTransform: "none" }}
        startIcon={<Folder color="warning" />}
        endIcon={<ArrowDropDown />}
      >
        Kolekcje
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
        <MenuItem onClick={handleClose}>Kolekcja 1</MenuItem>
        <MenuItem onClick={handleClose}>Kolekcja 2</MenuItem>
      </Menu>
    </div>
  )
}
