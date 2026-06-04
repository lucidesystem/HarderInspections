import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { useStyle } from './StyleContext';
import './pages/LandingPage.css';
import './Original.css';

const Layout = ({ children }) => {
  const { isOriginal, toggleStyle } = useStyle();

  return (
    <div className={`landing-container ${isOriginal ? 'original-wrapper' : ''}`}>
      <div className="style-toggle-container" style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.9)',
        padding: '5px 10px',
        borderRadius: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '12px',
        cursor: 'pointer',
        border: '1px solid #ddd'
      }} onClick={toggleStyle}>
        <span>{isOriginal ? 'Original Theme' : 'New Theme'}</span>
        <FontAwesomeIcon icon={faSyncAlt} />
      </div>

      {!isOriginal && (
        <>
          <header className="main-header">
            <div className="top-bar">
              <div className="contact-info">
                <span><FontAwesomeIcon icon={faPhone} /> <a href="tel:3162843811">316-284-3811</a></span>
                <span><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:ddharder4@yahoo.com">ddharder4@yahoo.com</a></span>
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
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Harder Home Inspections. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {isOriginal && (
        <div id="root">
          <div className="header" style={{
            backgroundColor: 'rgba(255, 252, 248, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            padding: '20px'
          }}>
            <h1 style={{ color: '#cc785c', margin: 0 }}>Harder Home Inspections</h1>
            <nav style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/radon">Radon</Link>
              <Link to="/schedule">Schedule</Link>
            </nav>
          </div>
          <main style={{ padding: '20px' }}>{children}</main>
        </div>
      )}
    </div>
  );
};

export default Layout;
