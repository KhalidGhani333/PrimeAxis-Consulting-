import React from 'react';

const CaseStudies = () => {
  return (
    <section style={{background:'var(--white)', padding:'5rem 0'}} id="cases">
      <div className="wrap">
        <div className="reveal" style={{textAlign:'center', marginBottom:'1rem'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Success Stories</div>
          <h2 className="section-heading" style={{textAlign:'center'}}>Our Case Studies</h2>
        </div>
        <div className="cases-grid">
          <div className="case-card reveal">
            <div className="case-img">
              <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&auto=format&fit=crop" alt="Banking"/>
              <div className="case-tag">Finance</div>
            </div>
            <div className="case-body">
              <h3>Digital Transformation — High Street Bank SME Division</h3>
              <p>Redesigned SME onboarding journey, reduced loan processing time, and launched digital portal serving 24,000+ business customers.</p>
              <div className="case-footer">
                <div className="case-client"><strong>Client:</strong> Major UK Bank</div>
                <div className="case-metric">+48% efficiency</div>
              </div>
            </div>
          </div>
          <div className="case-card reveal">
            <div className="case-img">
              <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&auto=format&fit=crop" alt="Healthcare"/>
              <div className="case-tag">Healthcare</div>
            </div>
            <div className="case-body">
              <h3>Revenue Cycle Optimisation — Private UK Health Network</h3>
              <p>Streamlined billing, coding, and collections across 12 facilities, cutting average AR days from 58 to 31.</p>
              <div className="case-footer">
                <div className="case-client"><strong>Client:</strong> UK Health Group</div>
                <div className="case-metric">-42% AR days</div>
              </div>
            </div>
          </div>
          <div className="case-card reveal">
            <div className="case-img">
              <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&auto=format&fit=crop" alt="Manufacturing"/>
              <div className="case-tag">Manufacturing</div>
            </div>
            <div className="case-body">
              <h3>Supply Chain Restructuring — FTSE 250 Industrial PLC</h3>
              <p>Consolidated vendor base, redesigned procurement strategy, and implemented demand-driven inventory planning.</p>
              <div className="case-footer">
                <div className="case-client"><strong>Client:</strong> Industrial PLC</div>
                <div className="case-metric">£120M saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
