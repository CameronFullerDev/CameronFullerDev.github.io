import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SocialList from "./common/SocialList";

function Footer() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="relative">
        <Toolbar>
          <SocialList />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
