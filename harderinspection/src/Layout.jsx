import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="landing-container">
      <header className="main-header">
        <div className="top-bar">
          <div className="contact-info">
            <span>
              <FontAwesomeIcon icon={faPhone} />{' '}
              <a href="tel:3162843811">316-284-3811</a> |
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:ddharder4@yahoo.com">
                ddharder4@yahoo.com
              </a>
            </span>
          </div>
        </div>

        <nav className="navbar">
                    {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src="./../public/images/Logo.jpg" alt="" id='headerlogo'/>
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services/Rates</Link></li>
            <li><Link to="/radon">Radon</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>

        </nav>

        {/* Overlay */}
        <div
          className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
          onClick={closeSidebar}
        />

        {/* Mobile Sidebar */}
        <aside className={`mobile-sidebar ${sidebarOpen ? 'active' : ''}`}>
          <button
            className="sidebar-close"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul className="sidebar-links">
            <li>
              <Link to="/" onClick={closeSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeSidebar}>
                Services/Rates
              </Link>
            </li>
            <li>
              <Link to="/radon" onClick={closeSidebar}>
                Radon
              </Link>
            </li>
            <li>
              <Link to="/schedule" onClick={closeSidebar}>
                Schedule
              </Link>
            </li>
          </ul>
        </aside>
      </header>

      <main>{children}</main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Harder Home Inspections</h4>
              <p>Newton, Kansas</p>
              <p>Phone: 316-284-3811</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/radon">Radon</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Harder Home Inspections. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;