import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { StyleProvider } from "./StyleContext";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Radon from "./pages/Radon";
import Schedule from "./pages/Schedule";
import "./App.css";

function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/radon" element={<Radon />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
