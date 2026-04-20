import React from 'react';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <div className="reveal" style={{textAlign:'center', marginBottom:0}}>
          <div className="section-label" style={{justifyContent:'center'}}>Our Leadership</div>
          <h2 className="section-heading" style={{textAlign:'center'}}>Meet the Partners</h2>
        </div>
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-img"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop" alt="Robert Sterling"/></div>
            <div className="team-body">
              <h3>Robert Sterling</h3>
              <div className="team-dash"></div>
              <div className="team-role">Managing Partner & CEO</div>
              <p style={{fontSize:'.85rem', color:'var(--muted)', marginTop:'.5rem', lineHeight:1.6}}>Ex-McKinsey London. 22 years in strategy consulting. Oxford Alumnus and former Advisor to the UK Department for Business & Trade.</p>
              <div className="team-socials">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div className="team-card reveal">
            <div className="team-img"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop" alt="Elizabeth Moore"/></div>
            <div className="team-body">
              <h3>Elizabeth Moore</h3>
              <div className="team-dash"></div>
              <div className="team-role">Partner — Financial Advisory</div>
              <p style={{fontSize:'.85rem', color:'var(--muted)', marginTop:'.5rem', lineHeight:1.6}}>Ex-Deloitte, Cambridge Alumna. 16 years in M&A and financial restructuring. Led 40+ Tier-1 transactions across Europe.</p>
              <div className="team-socials">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div className="team-card reveal">
            <div className="team-img"><img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&auto=format&fit=crop" alt="Marcus Thorne"/></div>
            <div className="team-body">
              <h3>Marcus Thorne</h3>
              <div className="team-dash"></div>
              <div className="team-role">Partner — Digital & Technology</div>
              <p style={{fontSize:'.85rem', color:'var(--muted)', marginTop:'.5rem', lineHeight:1.6}}>Ex-Accenture, Imperial College Alumnus. Specialist in AI, ERP transformation, and emerging tech strategy for global enterprises.</p>
              <div className="team-socials">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
