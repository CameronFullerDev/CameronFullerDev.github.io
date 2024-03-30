import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "50%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography gutterBottom component="h2" variant="h4">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>

      {children}
    </Container>
  );
}
