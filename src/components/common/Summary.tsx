import { Typography } from "@mui/material";
import { summary } from "../../data/summary";
import SmallSection from "./SmallSection";
import Socials from "./Socials";

export default function Summary() {
  return (
    <SmallSection title="Get to know me!">
      <Typography gutterBottom component="p" color="text.secondary">
        {summary}
      </Typography>
      <Socials />
    </SmallSection>
  );
}
