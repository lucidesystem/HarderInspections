import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faHouse,
  faClipboardCheck,
  faShieldHalved,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const associations = [
    // ...
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`mobile-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <button
          className="sidebar-close"
          onClick={() => setSidebarOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <nav className="sidebar-nav">
          <a href="#home" onClick={() => setSidebarOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setSidebarOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setSidebarOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setSidebarOpen(false)}>
            Contact
          </a>
        </nav>
      </aside>

      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: "url('/images/stone.home2.jpg')" }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Expert Home Inspections in Central Kansas</h2>
            <p>
              Providing you with the information you need to make an informed
              decision about your home purchase.
            </p>
            <button className="cta-button">
              Schedule an Inspection
            </button>
          </div>
        </div>
      </section>

      {/* Rest of your sections... */}
    </>
  );
};

export default LandingPage;