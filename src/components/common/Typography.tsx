import MTypography, {
  TypographyProps as MTypographyProps,
} from "@mui/material/Typography";

interface TypographyProps extends MTypographyProps {}

function Typography({ children, ...props }: TypographyProps) {
  return <MTypography {...props}>{children}</MTypography>;
}

export default Typography;
