import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faHouse,
  faClipboardCheck,
  faShieldHalved,
  faCalendarCheck,
  faRadiation,
  faLungsVirus,
  faFlaskVial,
  faCircleCheck,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

/* ── fade-in on scroll ─────────────────────────────────────────── */
const useFadeIn = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('fade-in-visible'); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

/* ── reusable animated section wrapper ────────────────────────── */
const Section = ({ className = '', children, style }) => {
  const ref = useFadeIn();
  return (
    <section ref={ref} className={`snap-section ${className}`} style={style}>
      {children}
    </section>
  );
};

/* ── radon level gauge (pure CSS/SVG) ─────────────────────────── */
const RadonGauge = () => (
  <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { label: 'Safe Zone', range: '< 2 pCi/L', color: '#2e9e5b', pct: 20 },
        { label: 'EPA Action Level', range: '2 – 4 pCi/L', color: '#f0a500', pct: 40 },
        { label: 'Elevated Risk', range: '4 – 10 pCi/L', color: '#e05c00', pct: 65 },
        { label: 'Severe Risk', range: '> 10 pCi/L', color: '#c0392b', pct: 100 },
      ].map(({ label, range, color, pct }) => (
        <div key={label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '0.88rem', fontWeight: 600 }}>
            <span style={{ color }}>{label}</span>
            <span style={{ color: '#777' }}>{range}</span>
          </div>
          <div style={{ background: '#e5e5e5', borderRadius: 6, height: 14, overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 6, transition: 'width 1s ease' }} />
          </div>
        </div>
      ))}
    </div>
    <p style={{ marginTop: 16, fontSize: '0.82rem', color: '#888', textAlign: 'center' }}>
      The EPA recommends mitigation at or above <strong>4 pCi/L</strong>. The average U.S. indoor level is 1.3 pCi/L.
    </p>
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
const Radon = () => {
  return (
    <div className="landing-container">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <Section className="snap-section--hero" style={{ minHeight: '60vh' }}>
        <div className="snap-bg-text">RADON</div>
        <div className="snap-inner snap-inner--split">
          <div className="hero-info">
            <span className="hero-badge">
              <FontAwesomeIcon icon={faTriangleExclamation} style={{ marginRight: 6 }} />
              EPA Priority Hazard
            </span>
            <h2>Is Radon Hiding in Your Home?</h2>
            <div className="hero-divider" />
            <p className="hero-sub">
              Radon is the <strong>#1 cause of lung cancer among non-smokers</strong> in the United States — and you can't see it, smell it, or taste it. The only way to know is to test.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <Link to="/schedule" className="contact-pill">
                Schedule My Test <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
              </Link>
              <a href="#what-is-radon" className="contact-pill" style={{ background: 'transparent', color: 'var(--primary-blue)', border: '2px solid var(--primary-blue)', textDecoration: 'none' }}>
                Learn More
              </a>
            </div>
          </div>
          <div className="intro-image">
            <img src="/images/KansasRadonProgram.png" alt="Kansas Radon Program" style={{ maxWidth: '200px', borderRadius: 10 }} />
          </div>
        </div>
        <div className="scroll-hint">↓ scroll to learn more</div>
      </Section>

      {/* ── WHAT IS RADON ─────────────────────────────────────── */}
      <Section className="snap-section--light" id="what-is-radon">
        <div className="snap-inner snap-inner--centered">
          <span className="section-label">The Science</span>
          <h2 className="section-heading">What Is Radon?</h2>
          <div className="hero-divider hero-divider--center" />
          <p className="body-text" style={{ marginBottom: 40 }}>
            Radon is a colorless, odorless, radioactive gas formed by the natural decay of uranium in soil, rock, and water. It seeps up through the ground and can accumulate to dangerous concentrations inside any building — new or old, with or without a basement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, width: '100%', maxWidth: 900 }}>
            {[
              { icon: faRadiation, title: 'Radioactive Gas', body: 'Radon decays into radioactive particles that get trapped in your lungs when inhaled, damaging tissue over time.' },
              { icon: faHouse, title: 'Found Everywhere', body: 'Any home can have elevated levels — soil type, construction, and ventilation all affect concentration.' },
              { icon: faLungsVirus, title: 'Silent Danger', body: 'There are no immediate symptoms. Damage builds quietly over years of exposure before lung cancer develops.' },
              { icon: faFlaskVial, title: 'Easily Measured', body: 'A professional short-term or long-term test provides accurate readings quickly and affordably.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="svc-icon-card">
                <div className="svc-icon-wrap">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--dark-grey)' }}>{title}</div>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── STATS BANNER ──────────────────────────────────────── */}
      <Section className="snap-section--blue">
        <div className="snap-bg-number snap-bg-number--light">21K</div>
        <div className="snap-inner snap-inner--centered">
          <span className="section-label section-label--light">By the Numbers</span>
          <h2 className="section-heading section-heading--light">Radon by the Numbers</h2>
          <div className="hero-divider hero-divider--center hero-divider--white" />
          <div className="stat-row">
            {[
              { num: '21,000', label: 'lung cancer deaths per year attributed to radon (EPA)' },
              { num: '1 in 15', label: 'U.S. homes have elevated radon levels' },
              { num: '4 pCi/L', label: 'EPA action level — mitigation recommended above this' },
              { num: '#2', label: 'leading cause of lung cancer overall in the U.S.' },
            ].map(({ num, label }) => (
              <div key={num} className="stat-card" style={{ background: 'rgba(255,255,255,0.15)', minWidth: 140 }}>
                <span className="stat-num" style={{ color: '#fff' }}>{num}</span>
                <span className="stat-label" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RADON LEVELS ──────────────────────────────────────── */}
      <Section className="snap-section--light">
        <div className="snap-inner snap-inner--centered">
          <span className="section-label">Understanding Your Results</span>
          <h2 className="section-heading">Radon Risk Levels</h2>
          <div className="hero-divider hero-divider--center" />
          <p className="body-text" style={{ marginBottom: 36 }}>
            Radon is measured in picocuries per liter of air (pCi/L). Knowing where your home falls on the scale tells you exactly what action to take.
          </p>
          <RadonGauge />
        </div>
      </Section>

      {/* ── HOW IT ENTERS ─────────────────────────────────────── */}
      <Section className="snap-section--dark">
        <div className="snap-bg-number snap-bg-number--dark">RN</div>
        <div className="snap-inner snap-inner--centered">
          <span className="section-label section-label--light">Entry Points</span>
          <h2 className="section-heading section-heading--light">How Radon Enters Your Home</h2>
          <div className="hero-divider hero-divider--center hero-divider--white" />
          <p className="body-text" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 36 }}>
            Radon gas travels through tiny cracks and gaps, often drawn in by the lower air pressure inside your home compared to the soil beneath it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 860 }}>
            {[
              'Cracks in foundation floors & walls',
              'Construction joints',
              'Gaps around service pipes',
              'Crawl spaces & dirt floors',
              'Well water (can release during use)',
              'Suspended floors over soil',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px' }}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'var(--secondary-blue)', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── KANSAS CONTEXT ────────────────────────────────────── */}
      <Section className="snap-section--light">
        <div className="snap-inner snap-inner--split" style={{ gap: 60, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <span className="section-label">Local Risk</span>
            <h2 className="section-heading">Kansas & Radon</h2>
            <div className="hero-divider" />
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 16 }}>
              Kansas is classified as an <strong>EPA Zone 1 state</strong> — the highest-risk category — meaning the predicted average indoor radon level is above 4 pCi/L. Large portions of central and eastern Kansas sit on soil and geology that naturally produce elevated radon concentrations.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 16 }}>
              The Kansas Radon Program recommends that <strong>all Kansas homes be tested</strong>, regardless of age, construction type, or whether a basement is present.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              As a certified Kansas radon tester, we follow all state protocols to deliver results you can trust.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: faShieldHalved, title: 'State Certified', body: 'Our technicians are certified through the Kansas Department of Health & Environment (KDHE).' },
              { icon: faClipboardCheck, title: 'Accurate Equipment', body: 'We use professional-grade continuous electronic monitors for precise, tamper-evident readings.' },
              { icon: faCalendarCheck, title: 'Fast Turnaround', body: 'Short-term tests are completed in 48 hours with results delivered promptly after retrieval.' },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--light-grey)', borderRadius: 12, padding: '18px 20px' }}>
                <div className="svc-icon-wrap" style={{ flexShrink: 0 }}>
                  <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4, color: 'var(--dark-grey)' }}>{title}</div>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────── */}
      <Section className="snap-section--hero">
        <div className="snap-inner snap-inner--centered">
          <span className="section-label">The Process</span>
          <h2 className="section-heading">What to Expect</h2>
          <div className="hero-divider hero-divider--center" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%', maxWidth: 680, marginTop: 12 }}>
            {[
              { step: '01', title: 'Schedule Your Test', body: 'Book online or call us. We\'ll confirm a time that works for you — typically within a few days.' },
              { step: '02', title: 'Device Placement', body: 'We place a professional monitor in the lowest livable area of your home. Closed-house conditions are required for 12 hours prior.' },
              { step: '03', title: '48-Hour Test Period', body: 'The monitor runs quietly for 48 hours, continuously recording radon levels throughout the test.' },
              { step: '04', title: 'Results & Report', body: 'We retrieve the device and provide a full written report with your radon level and a clear recommendation.' },
            ].map(({ step, title, body }, i, arr) => (
              <div key={step} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', position: 'relative', paddingBottom: i < arr.length - 1 ? 32 : 0 }}>
                {/* vertical line */}
                {i < arr.length - 1 && (
                  <div style={{ position: 'absolute', left: 22, top: 44, width: 2, height: 'calc(100% - 12px)', background: 'var(--primary-blue)', opacity: 0.2 }} />
                )}
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                  {step}
                </div>
                <div style={{ paddingTop: 6 }}>
                  <div style={{ fontWeight: 700, color: 'var(--dark-grey)', marginBottom: 4 }}>{title}</div>
                  <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <Section className="snap-section--blue" style={{ minHeight: 'auto', padding: '80px 20px' }}>
        <div className="snap-inner snap-inner--centered" style={{ gap: 20 }}>
          <span className="section-label section-label--light">Take Action Today</span>
          <h2 className="svc-cta-heading" style={{ fontSize: '2rem' }}>
            Don't Wait — Your Family's Health Depends on It
          </h2>
          <div className="hero-divider hero-divider--center hero-divider--white" />
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 580, textAlign: 'center', lineHeight: 1.8 }}>
            Testing is the only way to know your radon level. It's fast, affordable, and could save your life. Schedule your professional radon test today.
          </p>
          <Link to="/schedule" className="cta-button-white" style={{ marginTop: 8 }}>
            Schedule My Radon Test <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
          </Link>
        </div>
      </Section>

    </div>
  );
};

export default Radon;