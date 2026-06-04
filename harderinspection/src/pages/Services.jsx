import React from 'react';

const Services = () => {
  return (
    <div className="landing-container">
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Services & Rates</h2>
          <div className="services-grid">
            <div className="service-card">
              <h4>Full Home Inspection</h4>
              <p>Starts at $350 (depending on square footage)</p>
            </div>
            <div className="service-card">
              <h4>Radon Testing</h4>
              <p>$125 with inspection, $150 standalone</p>
            </div>
            <div className="service-card">
              <h4>Termite Inspection</h4>
              <p>Coordinated with local specialists</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p>Contact us for a specific quote based on your property details.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
