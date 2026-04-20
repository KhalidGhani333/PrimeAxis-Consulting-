import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Our Work</div>
          <h2 className="section-heading">Featured Engagements</h2>
        </div>
        <div className="portfolio-grid">
          <div className="port-card reveal">
            <div className="port-img"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop" alt="Banking project"/></div>
            <div className="port-body">
              <div className="port-cat">Banking & Finance</div>
              <h3>Core Banking Modernisation for a Tier-1 UK Bank — 18-Month Digital Overhaul</h3>
            </div>
          </div>
          <div className="port-card reveal">
            <div className="port-img"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop" alt="Retail project"/></div>
            <div className="port-body">
              <div className="port-cat">Retail & Consumer</div>
              <h3>National Logistics Redesign for a London-based Retail Giant</h3>
            </div>
          </div>
          <div className="port-card reveal">
            <div className="port-img"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop" alt="Energy project"/></div>
            <div className="port-body">
              <div className="port-cat">Energy & Infrastructure</div>
              <h3>Net Zero Integration Strategy for a Major UK Energy Grid Provider</h3>
            </div>
          </div>
          <div className="port-card reveal">
            <div className="port-img"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop" alt="Healthcare project"/></div>
            <div className="port-body">
              <div className="port-cat">Healthcare & Pharma</div>
              <h3>Operational Turnaround of a Leading Private Hospital Group Across the UK</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
