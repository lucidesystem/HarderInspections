// src/App.jsx
import React from 'react';
// 1. Import the React Router components you need
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './componets/header'; // Note: check if you spelled 'components' correctly in your folders!
import About from "./pages/about";
import Radon from "./pages/Radon";
import Services from "./pages/Services"
import Schedule from './pages/Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClipboardCheck, faShieldHalved, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './pages/LandingPage.css';

// 2. This is your home layout component
const LandingPage = () => {
  const associations = [
    { name: 'InterNACHI', src: '/images/InternationalAssociationpfCertifiedHomeInspectors.png' },
    { name: 'Realtors of South Central Kansas', src: '/images/RealtorsOfSouthCentralKansas.png' },
    { name: 'Wichita Area Builders Association', src: '/images/WichitaAreaBuildersAssociation.png' },
    { name: 'NAHB', src: '/images/NAHB.png' },
    { name: 'Kansas Radon Program', src: '/images/KansasRadonProgram.png' },
    { name: 'Kansas Association of Real Estate Inspectors', src: '/images/KansasAssociationOfRealEstateInspectors.png' },
    { name: 'International Association of Professional Contractors', src: '/images/InternationalAssociationofProfessionalContractors.png' },
    { name: 'Harvey County Builders and Associates', src: '/images/HarveyCountyBuildersandAssociates.png' },
    { name: 'Certified Professional Inspector', src: '/images/CertifiedProfessionalInspectorInterNACHI.png' },
  ];

  return (
    <>
      <section id="home" className="hero-section" style={{ backgroundImage: "url('/images/stone.home2.jpg')" }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Expert Home Inspections in Central Kansas</h2>
            <p>Providing you with the information you need to make an informed decision about your home purchase.</p>
            <button className="cta-button">Schedule an Inspection</button>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-text">
            <h3>Harder Home Inspections - David Harder</h3>
            <p>A home inspection is a non-invasive, visual examination of the accessible areas of a residential property...</p>
          </div>
          <div className="intro-image">
            <img src="/images/home.PIC.jpg" alt="Home Inspection" />
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FontAwesomeIcon icon={faHouse} className="service-icon" />
              <h4>Full Home Inspection</h4>
              <p>Comprehensive evaluation of the home's structure and systems.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faShieldHalved} className="service-icon" />
              <h4>Radon Testing</h4>
              <p>Professional radon testing to ensure your home is safe from this odorless gas.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faClipboardCheck} className="service-icon" />
              <h4>Pre-Listing Inspection</h4>
              <p>Identify issues before you put your home on the market.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faCalendarCheck} className="service-icon" />
              <h4>New Construction</h4>
              <p>Ensuring your new home meets quality standards from the start.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="associations-section">
        <div className="container">
          <h2 className="section-title">Certifications & Associations</h2>
          <div className="associations-grid">
            {associations.map((assoc, index) => (
              <div key={index} className="assoc-item">
                <img src={assoc.src} alt={assoc.name} title={assoc.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header /> 

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/radon" element={<Radon />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;