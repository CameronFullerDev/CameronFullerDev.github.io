import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import { shortSummary } from "../../data/summary";
import Socials from "./Socials";

export default function Hero() {
  const theme = useTheme();
  return (
    <div
      className={
        theme.palette.mode === "light" ? "home-hero" : "home-hero-dark"
      }
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Container
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          justifyContent: "center",
          height: "inherit",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <Typography
            gutterBottom
            component="h2"
            variant="h4"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Hey, I'm Cameron Fuller
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {shortSummary}
          </Typography>
        </Box>

        <Socials />
      </Container>
    </div>
  );
}
