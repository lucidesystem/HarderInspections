import React from 'react';
import './LandingPage.css'; // Reuse common styles

const About = () => {
  return (
    <div className="landing-container">
      <section className="intro-section">
        <div className="container">
          <div className="intro-text">
            <h2>About David Harder</h2>
            <p>David Harder is a certified home inspector with years of experience in the construction and inspection industry. He is dedicated to providing thorough and honest evaluations for home buyers in Central Kansas.</p>
            <p>David's background in the building trades gives him a unique perspective on how homes are constructed and where potential issues might be hidden.</p>
          </div>
          <div className="intro-image">
            <img src="/images/dave.png" alt="David Harder" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
