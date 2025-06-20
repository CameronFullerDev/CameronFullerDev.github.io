import { Grid, Typography, Divider } from "@mui/material";
import Courses from "./common/Courses";
import Qualifications from "./common/Qualifications";
import Section from "./common/Section";
import Skills from "./common/Skills";
import Summary from "./common/Summary";
import SectionBlock from "./common/SectionBlock";

export default function About() {
  return (
    <Section
      title="About Me"
      description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."
    >
      <Grid container spacing={4}>
        {/* Summary */}
        <Grid item xs={12} md={6}>
          <SectionBlock>
            <Summary />
          </SectionBlock>
        </Grid>

        {/* Combined: Skills + Courses + Qualifications */}
        <Grid item xs={12} md={6}>
          <SectionBlock>
            <Skills />

            <Divider sx={{ my: 3 }} />

            <Courses />

            <Divider sx={{ my: 3 }} />

            <Qualifications />
          </SectionBlock>
        </Grid>
      </Grid>
    </Section>
  );
}
