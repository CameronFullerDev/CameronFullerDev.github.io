import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";
import { Button } from "@mui/material";
import NameCard from "./common/NameCard";
import { routes } from "../routes";

const drawerWidth = 240;

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", paddingTop: "1rem" }}
    >
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <NameCard />
      </Box>
      <List>
        {routes.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton
              aria-label={route.name}
              sx={{ textAlign: "center" }}
              onClick={() => navigate(route.route)}
            >
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ThemeToggle />
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon aria-label="Menu" />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NameCard />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes.map((route) => (
              <Button
                color="secondary"
                variant="text"
                aria-label={route.name}
                key={route.name}
                onClick={() => navigate(route.route)}
              >
                {route.name}
              </Button>
            ))}
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
