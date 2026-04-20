import React, { useEffect, useState } from 'react';

const Hero = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute('data-target');
          const duration = 1800;
          const step = (target / duration) * 16;
          let current = 0;
          
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current).toLocaleString();
          }, 16);
          
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-label">Committed to Your Growth</div>
        <h1>We Help <em>Businesses</em><br/>Reach Their Full Potential</h1>
        <p>PrimeAxis Consulting is the UK's leading firm for business strategy and growth — delivering measurable results for FTSE 100 organisations and global enterprises.</p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">Our Services</a>
          <a href="#about" className="btn-outline">Learn More</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stats-inner">
          <div className="stat-item">
            <div className="stat-num"><span className="counter" data-target="18">0</span>+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-num"><span className="counter" data-target="340">0</span>+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num"><span className="counter" data-target="95">0</span>%</div>
            <div className="stat-label">Client Retention</div>
          </div>
          <div className="stat-item">
            <div className="stat-num"><span className="counter" data-target="60">0</span>+</div>
            <div className="stat-label">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
