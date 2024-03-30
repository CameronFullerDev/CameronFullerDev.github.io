import Avatar from "@mui/material/Avatar";
import profileImg from "../../assets/profile.jpg";
import { Box, Typography } from "@mui/material";

const name = "Cameron Fuller";
const avatar = <Avatar alt={name} src={profileImg} />;

export default function NameCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      {avatar}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
        }}
      >
        <Typography color="text.secondary">{name}</Typography>
      </Box>
    </Box>
  );
}
