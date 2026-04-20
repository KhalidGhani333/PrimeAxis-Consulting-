import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.stat-box .counter');
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
    <section className="stats">
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-n"><span className="counter" data-target="340">0</span>+</div>
          <div className="stat-l">Projects Completed</div>
        </div>
        <div className="stat-box highlight">
          <div className="stat-n"><span className="counter" data-target="180">0</span></div>
          <div className="stat-l">Active Clients</div>
        </div>
        <div className="stat-box">
          <div className="stat-n"><span className="counter" data-target="85">0</span></div>
          <div className="stat-l">Consultants & Analysts</div>
        </div>
        <div className="stat-box">
          <div className="stat-n"><span className="counter" data-target="9">0</span></div>
          <div className="stat-l">Industry Verticals</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
