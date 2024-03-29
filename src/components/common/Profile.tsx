import { styled } from "@mui/system";
import { Typography, Grid, Paper } from "@mui/material";
import { summary } from "../../data/summary";
import { skills } from "../../data/skills";
import { experiences } from "../../data/experiences";

const PaperStyled = styled(Paper)({
  padding: "1rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
});

const ProfileWrapper = styled("div")({
  margin: "auto",
});

export function Profile() {
  // Calculate the number of columns dynamically based on screen size
  const numColumns = window.innerWidth >= 3840 ? 2 : 1;

  return (
    <ProfileWrapper>
      <PaperStyled elevation={3}>
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1">{summary}</Typography>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {[0, 1, 2].map((columnIndex) => (
            <Grid item xs={12} md={4} key={columnIndex}>
              <ul>
                {skills
                  .slice(
                    columnIndex * Math.ceil(skills.length / 3),
                    (columnIndex + 1) * Math.ceil(skills.length / 3),
                  )
                  .map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        {/* Render experiences in multiple columns */}
        <Grid container spacing={3}>
          {[...Array(numColumns)].map((_, columnIndex) => (
            <Grid item xs={12 / numColumns} key={columnIndex}>
              {experiences
                .slice(
                  columnIndex * Math.ceil(experiences.length / numColumns),
                  (columnIndex + 1) *
                    Math.ceil(experiences.length / numColumns),
                )
                .map((experience, index) => (
                  <div key={index}>
                    <Typography variant="h5" gutterBottom>
                      {experience.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {experience.company} - {experience.location}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {experience.duration}
                    </Typography>
                    <ul>
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ),
                      )}
                    </ul>
                  </div>
                ))}
            </Grid>
          ))}
        </Grid>
      </PaperStyled>
    </ProfileWrapper>
  );
}

export default Profile;
