import { Grid } from "@mui/material";
import Courses from "./common/Courses";
import Qualifications from "./common/Qualifications";
import Section from "./common/Section";
import Skills from "./common/Skills";
import Summary from "./common/Summary";

export default function About() {
  return (
    <Section
      title="About Me"
      description="Here you will find more information about me, what I do, and my
current skills mostly in terms of programming and technology."
    >
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={6} md={6}>
          <Summary />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Skills />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Courses />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Qualifications />
        </Grid>
      </Grid>
    </Section>
  );
}
