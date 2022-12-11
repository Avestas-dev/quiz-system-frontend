import GoogleIcon from "@mui/icons-material/Google"
import { Button, ButtonProps } from "@mui/material"
type GoogleSignInButtonProps = {} & ButtonProps<"button">

export const GoogleSignInButton = ({
  buttonText,
  ...props
}: GoogleSignInButtonProps & { buttonText: string }) => {
  return (
    <Button variant="contained" {...props} style={{ borderRadius: 9999 }}>
      <GoogleIcon /> <p className="pl-2 py-1">{buttonText}</p>
    </Button>
  )
}
