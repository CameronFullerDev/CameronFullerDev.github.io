import MButton, { ButtonProps as MButtonProps } from "@mui/material/Button";

interface ButtonProps extends MButtonProps {}

function Button({ children, ...props }: ButtonProps) {
  return <MButton {...props}>{children}</MButton>;
}

export default Button;
