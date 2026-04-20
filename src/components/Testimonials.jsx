import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeTesti, setActiveTesti] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTesti(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Apex Stratum's team brought a level of analytical rigor and UK market understanding that we hadn't seen from any other firm. Their digital transformation roadmap became our 5-year operating blueprint. We're seeing results every quarter.",
      author: "James Anderson",
      role: "CEO, Sterling Investment Bank",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop"
    },
    {
      text: "We engaged Apex Stratum for a complex supply chain overhaul. Their team embedded with us, understood our operational realities, and delivered a solution that saved us over a hundred million pounds in the first year alone.",
      author: "Sarah Jenkins",
      role: "COO, Retail Solutions Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop"
    },
    {
      text: "The ESG framework they built for us helped us attract our first major institutional investor. Their understanding of both UK regulations and global ESG standards is unmatched in the consultancy market.",
      author: "David Smith",
      role: "CFO, Global Energy PLC",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-label">Client Voices</div>
        <h2 className="section-heading">What Our Clients Say</h2>
        <div className="testi-slider">
          {testimonials.map((testi, i) => (
            <div key={i} className={`testi-slide ${activeTesti === i ? 'active' : ''}`}>
              <div className="quote-icon">"</div>
              <p className="testi-text">{testi.text}</p>
              <div className="testi-author">
                <img className="testi-avatar" src={testi.avatar} alt={testi.author}/>
                <div>
                  <div className="testi-name">{testi.author}</div>
                  <div className="testi-role">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-dots">
          {[0, 1, 2].map(i => (
            <div key={i} className={`dot ${activeTesti === i ? 'active' : ''}`} onClick={() => setActiveTesti(i)}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
