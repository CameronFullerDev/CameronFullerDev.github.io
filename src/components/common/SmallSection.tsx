import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SmallSectionProps {
  title: string;
  children: ReactNode;
}

export default function SmallSection({ title, children }: SmallSectionProps) {
  return (
    <Box>
      <Typography gutterBottom component="h3" variant="h6">
        {title}
      </Typography>

      {children}
    </Box>
  );
}
