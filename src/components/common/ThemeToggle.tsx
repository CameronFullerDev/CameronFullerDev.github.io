import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import { useContext } from "react";
import ColourModeContext from "../../contexts/ColourModeContext";

export default function ThemeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColourModeContext);
  const icon =
    theme.palette.mode === "dark" ? (
      <LightMode />
    ) : (
      <DarkMode />
    );

  return (
    <IconButton aria-label="Toggle theme" onClick={colorMode.toggleColorMode}>
      {icon}
    </IconButton>
  );
}
