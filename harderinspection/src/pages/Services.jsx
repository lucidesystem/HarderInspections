import React from 'react';
import { faHouse, faWind, faDroplet, faBolt, faLayerGroup, faFire, faShield, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {

  const inspectionAreas = [
    { icon: faHouse,          label: 'Roof & Exterior'       },
    { icon: faDroplet,        label: 'Moisture & Drainage'   },
    { icon: faWind,           label: 'Heating & Cooling'     },
    { icon: faBolt,           label: 'Electrical'            },
    { icon: faLayerGroup,     label: 'Foundation & Structure'},
    { icon: faFire,           label: 'Plumbing'              },
    { icon: faShield,         label: 'Basement / Crawlspace' },
    { icon: faMagnifyingGlass,label: 'Kitchens & Baths'      },
  ];

  const pricingRows = [
    { label: 'Under 799 sq ft',                              price: '$350'        },
    { label: '800 – 1,199 sq ft',                           price: '$375'        },
    { label: '1,200 – 1,999 sq ft',                         price: '$400'        },
    { label: '2,000 – 2,499 sq ft',                         price: '$425'        },
    { label: '2,500 – 2,999 sq ft',                         price: '$450'        },
    { label: '3,000 – 3,999 sq ft',                         price: '$500'        },
    { label: '4,000 – 4,999 sq ft',                         price: '$600'        },
    { label: '5,000 sq ft and up',                          price: '$.12/sq ft'  },
    { label: 'Radon Test 48hr (with inspection)',            price: '$150'        },
    { label: 'Radon Test 48hr (standalone)',                 price: '$175'        },
    { label: 'Outbuilding / Detached Garage (up to 500 sf)',price: '$50'         },
    { label: 'Sprinkling System (up to 8 zones, visual)',   price: '$30'         },
    { label: 'Crawlspace',                                  price: '$75'         },
    { label: 'Verification of Repairs Inspection',          price: '$75'         },
  ];

  const documents = [
    { label: 'Pre-Inspection Agreement',              href: '#' },
    { label: 'Sample Inspection Report',              href: '#' },
    { label: 'Radon Measurement Agreement',           href: '#' },
    { label: 'Life Expectancy Chart of Home Components', href: '#' },
  ];

  const findings = [
    {
      img: './images/11.jpg',        // ← swap path
      alt: 'HVAC ceiling vent with water staining',
      tag: 'HVAC / Moisture',
      heading: 'Hidden Water Damage',
      body: 'Staining around ceiling vents is a common sign of condensation issues or a slow leak above — easy to miss without a trained eye.',
    },
    {
      img: './images/10.jpg',        // ← swap path
      alt: 'Improperly taped ductwork in crawlspace',
      tag: 'Ductwork',
      heading: 'Improper Duct Repairs',
      body: 'DIY duct patches with household tape don\'t meet code and lead to efficiency losses and air quality problems in the living space.',
    },
  ];

  return (
    <div className="landing-container">

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="svc-intro-section">
        <div className="container svc-intro-inner">
          <p className="svc-intro-text">
            The decision to sell or purchase a home is an important one — and how better to
            proceed than with accurate, reliable information about the property. All inspections
            from Harder Certified Home Inspections evaluate every interior and exterior component
            and system: roof, basement, heating, cooling, ventilation, insulation, plumbing,
            structure, electrical, and the lot.
          </p>
        </div>
      </section>

      {/* ── WHAT WE INSPECT (icon cards) ──────────────────── */}
      <section className="svc-what-section">
        <div className="container">
          <p className="section-label">Comprehensive Coverage</p>
          <h2 className="section-heading svc-section-heading-dark">What We Inspect</h2>
          <div className="svc-icon-grid">
            {inspectionAreas.map(({ icon, label }) => (
              <div key={label} className="svc-icon-card">
                <div className="svc-icon-wrap">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <span className="svc-icon-label">{label}</span>
              </div>
            ))}
          </div>

          {/* Full checklist under the icons */}
          <div className="svc-checklist-wrap">
            <h3 className="svc-checklist-title">Every inspection includes:</h3>
            <ul className="svc-checklist">
              {[
                'Roof','Building Exterior','Moisture Drainage','Sidewalks & Driveway',
                'Attics','Electrical','Basement / Crawlspace','Plumbing',
                'Foundations','Floors','Heating / Cooling','Kitchen',
                'Bathrooms','Ceilings & Walls','Living Areas',
              ].map(item => (
                <li key={item} className="svc-checklist-item">
                  <FontAwesomeIcon icon={faShield} className="svc-check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── REAL FINDINGS (photo split cards) ─────────────── */}
      <section className="svc-findings-section">
        <div className="container">
          <p className="section-label section-label--light">From the Field</p>
          <h2 className="section-heading section-heading--light">What Our Inspectors Actually Find</h2>
          <p className="svc-findings-sub">
            These are real photos from real inspections — the kind of issues that only a trained inspector catches.
          </p>
          <div className="svc-findings-grid">
            {findings.map(f => (
              <div key={f.tag} className="svc-finding-card">
                <div className="svc-finding-img-wrap">
                  <img src={f.img} alt={f.alt} className="svc-finding-img" />
                  <span className="svc-finding-tag">{f.tag}</span>
                </div>
                <div className="svc-finding-body">
                  <h3 className="svc-finding-heading">{f.heading}</h3>
                  <p className="svc-finding-text">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────── */}
      <section className="svc-pricing-section">
        <div className="container">
          <p className="section-label">Transparent Pricing</p>
          <h2 className="section-heading svc-section-heading-dark">Services &amp; Rates</h2>
          <p className="svc-pricing-note">
            Based on total finished living area. Payment due after inspection.
          </p>
          <div className="svc-pricing-table-wrap">
            <table className="svc-pricing-table">
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr key={row.label} className={`svc-pricing-row${i === 7 ? ' svc-pricing-divider' : ''}`}>
                    <td className="svc-pricing-label">{row.label}</td>
                    <td className="svc-pricing-price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (trust strip) ───────────────────── */}
      <section className="svc-trust-section">
        <div className="container svc-trust-inner">
          <div className="svc-trust-stat">
            <span className="svc-trust-num">15+</span>
            <span className="svc-trust-label">Years Experience</span>
          </div>
          <div className="svc-trust-divider" />
          <div className="svc-trust-stat">
            <span className="svc-trust-num">2,500+</span>
            <span className="svc-trust-label">Inspections Completed</span>
          </div>
          <div className="svc-trust-divider" />
          <div className="svc-trust-stat">
            <span className="svc-trust-num">InterNACHI</span>
            <span className="svc-trust-label">Certified Inspector</span>
          </div>
          <div className="svc-trust-divider" />
          <div className="svc-trust-stat">
            <span className="svc-trust-num">48hr</span>
            <span className="svc-trust-label">Report Turnaround</span>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ─────────────────────────────────────── */}
      <section className="svc-docs-section">
        <div className="container">
          <p className="section-label">Download</p>
          <h2 className="section-heading svc-section-heading-dark">Documents &amp; Resources</h2>
          <ul className="svc-docs-list">
            {documents.map(doc => (
              <li key={doc.label}>
                <a href={doc.href} className="svc-doc-link">
                  <FontAwesomeIcon icon={faLayerGroup} className="svc-doc-icon" />
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="svc-cta-section">
        <div className="container svc-cta-inner">
          <h2 className="svc-cta-heading">
            With so many great reasons to work with Harder Certified Home Inspections,
            why would you choose someone else?
          </h2>
          <a href="#contact" className="cta-button svc-cta-btn">Schedule Your Inspection</a>
        </div>
      </section>

    </div>
  );
};

export default Services;