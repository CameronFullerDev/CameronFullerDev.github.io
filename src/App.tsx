import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import ColourModeContext from "./contexts/ColourModeContext";
import { useTheme } from "./hooks/theme";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { routes } from "./routes";

function App() {
  const { theme, colorMode } = useTheme();

  return (
    <ColourModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <CssBaseline />
          <Navbar />
          <Box sx={{ minHeight: "calc(100vh - 128px)" }}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.route}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Box>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
