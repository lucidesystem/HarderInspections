import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './Layout';
import LandingPage from "./pages/LandingPage";
import About from "./pages/about";
import Radon from "./pages/Radon";
import Services from "./pages/Services"
import Schedule from './pages/Schedule';
//test comment
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/radon" element={<Radon />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
