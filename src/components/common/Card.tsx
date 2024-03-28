import MCard, { CardProps as MCardProps } from "@mui/material/Card";

interface CardProps extends MCardProps {}

function Card({ children, ...props }: CardProps) {
  return <MCard {...props}>{children}</MCard>;
}

export default Card;
