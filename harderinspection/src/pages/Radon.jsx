import React from 'react';

const Radon = () => {
  return (
    <div className="landing-container">
      <section className="intro-section">
        <div className="container">
          <div className="intro-text">
            <h2>Radon Testing</h2>
            <p>Radon is a colorless, odorless, radioactive gas that comes from the natural breakdown of uranium in soil, rock, and water and gets into the air you breathe.</p>
            <p>The EPA recommends that all homes be tested for radon. Our professional testing provides accurate results using state-of-the-art equipment.</p>
          </div>
          <div className="intro-image">
            <img src="/images/KansasRadonProgram.png" alt="Radon Program" style={{ maxWidth: '200px' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Radon;
