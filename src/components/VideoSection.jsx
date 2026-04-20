import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section" id="transform">
      <div className="wrap">
        <div className="video-grid">
          <div className="video-thumb reveal">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop" alt="Team at work"/>
            <div className="play-btn"><i className="fas fa-play"></i></div>
          </div>
          <div className="reveal">
            <div className="section-label">Our Approach</div>
            <h2 className="section-heading">Insights into UK Business Transformation</h2>
            <p style={{color:'var(--muted)', lineHeight:1.75, marginBottom:'.5rem'}}>Watch our brief overview to understand how PrimeAxis Consulting has helped over 180 organisations navigate the UK's complex regulatory environment and achieve sustainable growth.</p>
            <ul className="check-list">
              <li><i className="fas fa-check-circle"></i>FCA & PRA aligned methodologies for financial services</li>
              <li><i className="fas fa-check-circle"></i>Specialised depth in Retail, Energy, and Pharma sectors</li>
              <li><i className="fas fa-check-circle"></i>UK GDPR and Cyber Security focused transformations</li>
              <li><i className="fas fa-check-circle"></i>On-ground presence across the United Kingdom</li>
              <li><i className="fas fa-check-circle"></i>Performance-linked fee structures for select projects</li>
            </ul>          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
