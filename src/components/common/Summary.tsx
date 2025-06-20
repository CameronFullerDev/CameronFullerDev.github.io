import { Typography, Box } from "@mui/material";
import { areasOfInterest, summary } from "../../data/summary";
import SmallSection from "./SmallSection";
import Socials from "./Socials";

export default function Summary() {
  return (
    <SmallSection title="Get to know me!">
      <Typography gutterBottom component="p" color="text.secondary">
        {summary}
      </Typography>

      <Box mt={3}>
        <Typography component="p" color="text.secondary">
          {areasOfInterest}
        </Typography>
      </Box>

      <Box mt={3}>
        <Socials />
      </Box>
    </SmallSection>
  );
}
