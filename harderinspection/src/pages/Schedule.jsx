import React from 'react';

const Schedule = () => {
  return (
    <div className="landing-container">

      {/* ── INTRO ── */}
      <section className="svc-intro-section">
        <div className="container">
          <div className="svc-intro-inner" style={{ margin: '0 auto', textAlign: 'center' }}>
            <p className="section-label section-label--light">Harder Certified Home Inspections</p>
            <h2 className="section-heading section-heading--light" style={{ marginBottom: '16px' }}>
              Schedule an Inspection
            </h2>
            <div className="hero-divider hero-divider--center hero-divider--white" />
            <p className="svc-intro-text">
              Please email, phone, or text us with any questions regarding scheduling a home inspection.
              David is happy to answer questions before you book — no pressure, just honest answers.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHOTO + CONTACT (side by side, centered on page) ── */}
      <section style={{ background: 'var(--white)', padding: '70px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'nowrap',
          }}>

            {/* Photo */}
            <img
              src="/images/dave.png"
              alt="David Harder"
              style={{
                width: '220px',
                borderRadius: '12px',
                boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                flexShrink: 0,
              }}
            />

            {/* Contact info — left-aligned text inside the column */}
            <div style={{ textAlign: 'left' }}>
              <p className="section-label">Your Inspector</p>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)', marginBottom: '4px' }}>David Harder</h2>
              <p style={{ color: '#666', marginBottom: '4px' }}>State of Kansas Certified Real Estate Inspector</p>
              <p style={{ color: '#666', marginBottom: '20px' }}>Serving All of Central Kansas</p>
              <div className="hero-divider" style={{ marginBottom: '24px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'var(--primary-blue)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.88 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.8 1h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 8.82a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999', marginBottom: '2px' }}>Phone / Text</p>
                    <h2><a href="tel:3162843811" className="phone-btn" style={{ paddingLeft: 0 }}>316-284-3811</a></h2>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'var(--primary-blue)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999', marginBottom: '2px' }}>Email</p>
                    <h2><a href="mailto:ddharder4@yahoo.com">ddharder4@yahoo.com</a></h2>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PHOTO BANNER CTA ── */}
      <section style={{
        backgroundImage: 'url(/images/HouseTrees.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        position: 'relative',
        padding: '80px 0',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '1.9rem', marginBottom: '16px' }}>
            Ready to protect your investment?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 28px' }}>
            Reach out today — David will get back to you promptly to confirm your appointment.
          </p>
          <a href="tel:3162843811" className="contact-pill" style={{ fontSize: '1rem', padding: '12px 32px' }}>
            Call 316-284-3811
          </a>
        </div>
      </section>

    </div>
  );
};

export default Schedule;