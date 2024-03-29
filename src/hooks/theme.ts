import { createTheme, PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";
import { grey } from "@mui/material/colors";

export function useTheme() {
  const themeOptions = {
    light: "light",
    dark: "dark",
  };

  function initializeMode() {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      localStorage.setItem("theme", themeOptions.light);
      return "light";
    }
    return savedTheme === themeOptions.light ? "light" : "dark";
  }

  const [mode, setMode] = useState<PaletteMode>(() => initializeMode());

  function toggleColorMode() {
    setMode((prevMode: PaletteMode) => {
      const newMode = prevMode === themeOptions.light ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  }

  const colorMode = useMemo(() => ({ toggleColorMode }), []);

  const lightColors = {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: grey[900],
    },
    divider: grey[300],
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  };

  const darkColors = {
    primary: grey,
    secondary: grey,
    divider: grey[700],
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  };

  function getDesignTokens(mode: PaletteMode) {
    return {
      palette: {
        mode,
        ...(mode === "light" ? lightColors : darkColors),
      },
    };
  }

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const isDarkMode = () => theme.palette.mode === themeOptions.dark;

  return { theme, colorMode, isDarkMode };
}
