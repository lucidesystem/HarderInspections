import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooter = location.pathname === '/about';

  return (
    <div className="landing-container">
      <header className="main-header">
        <div className="top-bar">
          <div className="contact-info">
            <span><FontAwesomeIcon icon={faPhone} /> <a href="tel:3162843811">316-284-3811</a> | </span>
            <span><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:ddharder4@yahoo.com">ddharder4@yahoo.com</a></span>
          </div>
        </div>
        <nav className="navbar">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none' }}><h1>Harder Home Inspections</h1></Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services/Rates</Link></li>
            <li><Link to="/radon">Radon</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      {!hideFooter && (
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
              <p>&copy; {new Date().getFullYear()} Harder Home Inspections. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;