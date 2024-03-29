import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import ProfileCard from "./common/ProfileCard";
import Profile from "./common/Profile";

const GridStyled = styled(Grid)({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content vertically
});

export function About() {
  return (
    <GridStyled container spacing={1}>
      {/* <Grid item xs={12} sm={3} md={2}>
        <ProfileCard />
      </Grid> */}
      <Grid item xs={12} sm={6} md={9}>
        <Profile />
      </Grid>
    </GridStyled>
  );
}

export default About;
