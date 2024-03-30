import { Box, Typography } from "@mui/material";
import { summary } from "../../data/summary";
import Socials from "./Socials";

export default function Summary() {
  return (
    <Box>
      <Typography gutterBottom component="h3" variant="h6">
        Get to know me!
      </Typography>
      <Typography gutterBottom component="p" color="text.secondary">
        {summary}
      </Typography>

      <Socials />
    </Box>
  );
}
