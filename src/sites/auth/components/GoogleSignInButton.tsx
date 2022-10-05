import GoogleIcon from "@mui/icons-material/Google"
import { Button, ButtonProps } from "@mui/material"
type GoogleSignInButtonProps = {} & ButtonProps<"button">

export const GoogleSignInButton = (props: GoogleSignInButtonProps) => {
  return (
    <Button variant="contained" {...props} style={{ borderRadius: 9999 }}>
      <GoogleIcon /> <p className="pl-2 py-1">Sign in with Google</p>
    </Button>
  )
}
