import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import { useContext } from "react";
import ColourModeContext from "../../contexts/ColourModeContext";

export default function DarkModeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColourModeContext);
  const icon = theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />;

  return <IconButton onClick={colorMode.toggleColorMode}>{icon}</IconButton>;
}
