import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const prices = {
    monthly: ['1,800', '4,900', '15,000'],
    yearly: ['1,500', '4,200', '12,500']
  };

  const currentPrices = isYearly ? prices.yearly : prices.monthly;

  return (
    <section className="pricing" id="pricing">
      <div className="wrap pricing-inner">
        <div className="pricing-header reveal">
          <div className="section-label">Engagement Models</div>
          <h2>London Market Pricing</h2>
          <div className="toggle-wrap">
            <span className={!isYearly ? 'active' : ''} id="monthly-label">Monthly Retainer</span>
            <div className={`toggle ${isYearly ? 'yearly' : ''}`} id="billing-toggle" onClick={() => setIsYearly(!isYearly)}></div>
            <span className={isYearly ? 'active' : ''} id="yearly-label">Annual Contract</span>
          </div>
        </div>
        <div className="pricing-grid">
          <div className="price-card reveal">
            <div className="price-icon-wrap"><i className="fas fa-seedling"></i></div>
            <div className="price-name">SME Growth Advisory</div>
            <div className="price-sub">For emerging UK businesses</div>
            <div className="price-amount">
              <span className="dollar">£</span><span className="num">{currentPrices[0]}</span><span className="per">/month</span>
            </div>
            <ul className="price-features">
              <li><i className="fas fa-check"></i> Monthly strategy session (4hrs)</li>
              <li><i className="fas fa-check"></i> Financial health dashboard</li>
              <li><i className="fas fa-check"></i> Priority email support</li>
              <li><i className="fas fa-check"></i> Quarterly performance review</li>
              <li className="disabled"><i className="fas fa-xmark"></i> Dedicated senior lead</li>
              <li className="disabled"><i className="fas fa-xmark"></i> Regulatory reporting</li>
            </ul>
            <a href="#" className="price-btn red">Get Started</a>
          </div>
          <div className="price-card popular reveal">
            <div className="popular-badge">Most Popular</div>
            <div className="price-icon-wrap"><i className="fas fa-rocket"></i></div>
            <div className="price-name">Executive Consulting</div>
            <div className="price-sub">For mid-cap & corporate clients</div>
            <div className="price-amount" style={{borderColor:'rgba(255,255,255,.2)'}}>
              <span className="dollar" style={{color:'#fff'}}>£</span><span className="num" style={{color:'#fff'}}>{currentPrices[1]}</span><span className="per" style={{color:'rgba(255,255,255,.7)'}}>/month</span>
            </div>
            <ul className="price-features">
              <li><i className="fas fa-check"></i> Weekly consulting sessions</li>
              <li><i className="fas fa-check"></i> Dedicated senior partner</li>
              <li><i className="fas fa-check"></i> Full on-site & remote support</li>
              <li><i className="fas fa-check"></i> Advanced market analytics</li>
              <li><i className="fas fa-check"></i> Board presentation support</li>
              <li className="disabled" style={{color:'rgba(255,255,255,.4)'}}><i className="fas fa-xmark"></i> Full enterprise overhaul</li>
            </ul>
            <a href="#" className="price-btn white">Get Started</a>
          </div>
          <div className="price-card reveal">
            <div className="price-icon-wrap"><i className="fas fa-crown"></i></div>
            <div className="price-name">Enterprise Transformation</div>
            <div className="price-sub">For FTSE 250 & large groups</div>
            <div className="price-amount">
              <span className="dollar">£</span><span className="num">{currentPrices[2]}</span><span className="per">/month</span>
            </div>
            <ul className="price-features">
              <li><i className="fas fa-check"></i> Full-time embedded team</li>
              <li><i className="fas fa-check"></i> Unlimited strategy sessions</li>
              <li><i className="fas fa-check"></i> 24/7 priority C-suite support</li>
              <li><i className="fas fa-check"></i> Custom data platform</li>
              <li><i className="fas fa-check"></i> Global regulatory advisory</li>
              <li><i className="fas fa-check"></i> Change management workshops</li>
            </ul>
            <a href="#" className="price-btn red">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
