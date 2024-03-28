import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { usePerformanceMetrics } from "./hooks/reportWebVitals";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  const { reportWebVitals } = usePerformanceMetrics();

  reportWebVitals(console.log);

  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<Home />} />

          <Route path="/portfolio" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
