import React from 'react';

const About = () => {
  return (
    <section className="about-split" id="about">
      <div className="about-grid">
        <div className="about-img-col">
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop" alt="PrimeAxis Consulting HQ"/>
          <div className="about-red-block"></div>
          <div className="about-hatch"></div>
        </div>
        <div className="about-content reveal">
          <div className="section-label">The Firm</div>
          <h2 className="section-heading" style={{color:'#fff'}}>Redefining UK Business Transformation Since 2007</h2>
          <p className="bold-p">PrimeAxis Consulting is a London-based strategy firm with a global footprint, serving organisations across the UK, Europe, and North America.</p>
          <p>Founded by alumni of McKinsey, BCG, and the London School of Economics (LSE), our 85-person team combines global methodology with local market agility. We have advised four of the UK's top-10 banks, led major healthcare transformations, and driven growth initiatives for FTSE 250 groups.</p>
          <ul className="about-bullets">
            <li>Offices in London, Manchester & Edinburgh</li>
            <li>Certified by ISO 9001:2015, Cyber Essentials Plus</li>
            <li>Ranked Top-Tier Management Consulting Firm (Consultancy.uk, 2024)</li>
            <li>Member of the Management Consultancies Association (MCA)</li>
          </ul>
          <a href="#" className="btn-primary" style={{alignSelf:'flex-start', marginTop:'.5rem'}}>Our Firm Profile</a>
        </div>
      </div>
    </section>
  );
};

export default About;
