import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Socials from "./Socials";
import { shortSummary } from "../../data/summary";

const ProfileCardWrapper = styled(Card)({
  maxWidth: 400,
  margin: "auto",
});

const ProfileCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
});

function ProfileCard() {
  return (
    <ProfileCardWrapper>
      <ProfileCardContent>
        <Typography variant="h5" component="h2">
          Cameron Fuller
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Senior Software Engineer
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {shortSummary}
        </Typography>
        <Socials />
      </ProfileCardContent>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
