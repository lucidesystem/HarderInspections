import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.snap-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="snap-container">

      <div className="snap-section snap-section--hero">
        <div className="snap-bg-text">HARDER</div>
        <div className="snap-inner snap-inner--split">
          <div className="intro-image">
            <img src="/images/dave.png" alt="David Harder" />
          </div>
          <div className="hero-info">
            <div className="hero-badge">Kansas Certified Inspector</div>
            <h2>Harder Certified<br />Home Inspections</h2>
            <p className="hero-sub">Serving All of Central Kansas</p>
            <div className="hero-divider" />
            <p className="hero-title-line">State of Kansas Certified Real Estate Inspector</p>
            <h3 className="hero-name">David Harder</h3>
            <div className="hero-contact">
              <a className="contact-pill" href="tel:3162843811">&#9990; 316-284-3811</a>
              <a className="contact-pill" href="mailto:ddharder4@yahoo.com">&#9993; ddharder4@yahoo.com</a>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll to learn more &#8595;</div>
      </div>

      <div className="snap-section snap-section--light">
        <div className="snap-bg-number">01</div>
        <div className="snap-inner snap-inner--centered">
          <div className="section-label">About David</div>
          <h2 className="section-heading">Experience You Can Trust</h2>
          <div className="hero-divider hero-divider--center" />
          <p className="body-text">
            A home is the biggest purchase you'll ever make, so it's important to understand the condition of your investment. <strong>Harder Certified Home Inspections</strong> will provide you with a comprehensive home inspection and a report you can rely on to make a confident decision. David Harder, the Owner/Inspector for <strong>Harder Certified Home Inspections</strong> has been in the <strong>Building Industry</strong> since an early age. As a Kansas licensed contractor and home builder I know how a home is put together from start to finish, including its structure, roof, plumbing and electrical systems. As a Certified Professional Inspector I have the knowledge to spot problems that other inspectors might miss. Over the last several decades I have seen how the building codes have changed and which codes are most important, or even overlooked. I have been involved in <strong>1000's</strong> of inspections involving all areas of the home industry. I continue to this day of building new homes. I am now using my expertise to also do fulltime <strong>Home Inspections</strong>. If you are needing a home inspector with the most <strong>experience</strong> than give me a call, <strong>316-284-3811.</strong>
          </p>
          <div className="stat-row">
            <div className="stat-card"><span className="stat-num">1000+</span><span className="stat-label">Inspections</span></div>
            <div className="stat-card"><span className="stat-num">30+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat-card"><span className="stat-num">11</span><span className="stat-label">Certifications</span></div>
            <div className="stat-card"><span className="stat-num">50+</span><span className="stat-label">Cities Served</span></div>
          </div>
        </div>
      </div>

      <div className="snap-section snap-section--blue">
        <div className="snap-bg-number snap-bg-number--light">02</div>
        <div className="snap-inner snap-inner--centered">
          <div className="quote-icon">&ldquo;</div>
          <p className="quote-text">
            I understand that buying a home is one of the largest investments we make in our lives. It is my commitment to you that you fully understand the condition of the property prior to closing in an effort to help you make a more informed decision as a buyer.
          </p>
          <div className="quote-icon">&bdquo;</div>
          <div className="hero-divider hero-divider--white hero-divider--center" />
          <p className="quote-author">- David Harder, Owner &amp; Inspector</p>
          <a className="cta-button-white" href="tel:3162843811">Call Now: 316-284-3811</a>
        </div>
      </div>

      <div className="snap-section snap-section--light">
        <div className="snap-bg-number">03</div>
        <div className="snap-inner snap-inner--centered">
          <div className="section-label">Coverage Area</div>
          <h2 className="section-heading">Areas Served</h2>
          <div className="hero-divider hero-divider--center" />
          <div className="counties-row">
            {['Sedgwick','Harvey','Butler','Marion','McPherson','Reno','Saline','Kingman','Sumner','Cowley','Rice'].map(c => (
              <span key={c} className="county-tag">{c} County</span>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: '24px' }}>
            Including the towns of Wichita, Salina, Hutchinson, Emporia, Derby, Newton, McPherson, El Dorado, Winfield, Arkansas City, Andover, Maize, Haysville, Augusta, Wellington, Park City, Valley Center, Pratt, Bel Aire, Mulvane, Hesston, Haven, Belle Plain, Cheney, Andale, Inman, Lindsborg, Lyons, Sedgwick, Burrton, Buhler, North Newton, Peabody, Benton, Bentley, Burns, Canton, Eastborough, Elbing, Florence, Galva, Garden Plain, Goessel, Hillsboro, Marion, Potwin, Pretty Prairie, Walton, Whitewater and more.
          </p>
        </div>
      </div>

      <div className="snap-section snap-section--dark">
        <div className="snap-bg-number snap-bg-number--light">04</div>
        <div className="snap-inner snap-inner--centered">
          <div className="section-label section-label--light">Credentials</div>
          <h2 className="section-heading section-heading--light">Affiliations, Licenses &amp; Certifications</h2>
          <div className="hero-divider hero-divider--white hero-divider--center" />
          <ul className="certs-list">
            <li>Certified Professional Inspector &mdash; InterNACHI # NACHI17042914</li>
            <li>Realtors of South Central Kansas Affiliate Member &mdash; Lock Box Access</li>
            <li>Class B Contractor License Newton, KS &mdash; License # 0324</li>
            <li>Kansas Association of Real Estate Inspectors</li>
            <li>Kansas State University Graduate &mdash; Radon Measurement Course</li>
            <li>Kansas Radon Measurement Technician &mdash; Certification # KS-MS-0441</li>
            <li>International Conference of Building Officials Building Contractor</li>
            <li>Member &mdash; National Association of Home Builders</li>
            <li>Member &mdash; Wichita Area Builders Association</li>
            <li>Member &mdash; Harvey County Builders and Associates</li>
            <li>International Association of Professional Contractors</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;