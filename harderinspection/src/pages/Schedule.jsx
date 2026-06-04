import React from 'react';
import './LandingPage.css';

const Schedule = () => {
  return (
    <div className="landing-container">
      <section className="intro-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Schedule Your Inspection</h2>
          <p>The best way to schedule is to call or text David directly:</p>
          <h3 style={{ fontSize: '2rem', color: '#004a99' }}>316-284-3811</h3>
          <p>Or email: <a href="mailto:ddharder4@yahoo.com">ddharder4@yahoo.com</a></p>
          <div style={{ marginTop: '40px' }}>
            <p>Please have the property address and approximate square footage ready.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
