import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Our Expertise</div>
          <h2 className="section-heading">Strategic Solutions for Global Leaders</h2>
          <p className="section-sub">From boardroom strategy to complex multi-national transformation, we bring global standards and deep UK market intelligence to every project.</p>
        </div>
        <div className="services-grid">
          <div className="svc-card reveal">
            <div className="svc-icon"><i className="fas fa-chess-knight"></i></div>
            <h3>Corporate Strategy</h3>
            <p>Advising FTSE 100 and Private Equity firms on portfolio optimization, market entry, and sustainable growth in the UK and European markets.</p>
            <a href="#" className="svc-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon"><i className="fas fa-cogs"></i></div>
            <h3>Operational Resilience</h3>
            <p>Supply chain redesign and cost transformation programs tailored for the UK's unique regulatory and economic landscape.</p>
            <a href="#" className="svc-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon"><i className="fas fa-chart-line"></i></div>
            <h3>M&A and Financial Advisory</h3>
            <p>Valuations, due diligence, and capital structuring aligned with FCA standards and international financial reporting frameworks.</p>
            <a href="#" className="svc-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon"><i className="fas fa-digital-tachograph"></i></div>
            <h3>Digital Transformation</h3>
            <p>Scaling AI, Cloud, and Data Analytics for legacy enterprises, ensuring compliance with UK GDPR and global tech standards.</p>
            <a href="#" className="svc-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon"><i className="fas fa-users-cog"></i></div>
            <h3>Human Capital & Leadership</h3>
            <p>Executive search, organizational design, and performance culture for high-performance teams in London's competitive talent market.</p>
            <a href="#" className="svc-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon"><i className="fas fa-leaf"></i></div>
            <h3>ESG & Net Zero Strategy</h3>
            <p>Helping UK firms navigate TCFD reporting and green transition strategies to meet 2030 and 2050 sustainability targets.</p>
            <a href="#" className="svc-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
