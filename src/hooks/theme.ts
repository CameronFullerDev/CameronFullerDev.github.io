import { createTheme, PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";
import {
  darkColors,
  darkTypography,
  lightColors,
  lightTypography,
} from "../data/theme";

export function useTheme() {
  function initializeMode() {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      localStorage.setItem("theme", "light");
      return "light";
    }
    return savedTheme === "light" ? "light" : "dark";
  }

  const [mode, setMode] = useState<PaletteMode>(() => initializeMode());

  function toggleColorMode() {
    setMode((prevMode: PaletteMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  }

  const colorMode = useMemo(() => ({ toggleColorMode }), []);

  function getDesignTokens(mode: PaletteMode) {
    return {
      palette: {
        mode,
        ...(mode === "light" ? lightColors : darkColors),
      },
      typography: {
        mode,
        ...(mode === "light" ? lightTypography : darkTypography),
      },
    };
  }

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { theme, colorMode };
}
