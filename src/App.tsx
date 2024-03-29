import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { usePerformanceMetrics } from "./hooks/performanceMetrics";
import { Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import ColourModeContext from "./contexts/ColourModeContext";
import { useTheme } from "./hooks/theme";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";

function App() {
  const { reportWebVitals } = usePerformanceMetrics();
  console.log(reportWebVitals);

  const { theme, colorMode } = useTheme();

  return (
    <ColourModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <CssBaseline />
          <Navbar />
          <Box sx={{ minHeight: "calc(100vh - 128px)" }}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Box>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
