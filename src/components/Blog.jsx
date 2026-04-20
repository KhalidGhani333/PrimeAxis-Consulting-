import React from 'react';

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Insights & Perspectives</div>
          <h2 className="section-heading">Our Recent Articles</h2>
        </div>
        <div className="blog-grid">
          <div className="blog-card reveal">
            <div className="blog-img"><img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format&fit=crop" alt="London economy"/></div>
            <div className="blog-body">
              <div className="blog-meta">By Robert Sterling &nbsp;·&nbsp; March 15, 2026</div>
              <h3>The 2026 UK Economic Outlook: 5 Strategic Priorities for Boardrooms</h3>
              <p>With market stabilization and improving growth indicators, we outline the sectors best positioned to capture value as the UK economy accelerates.</p>
              <a href="#" className="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="blog-card reveal">
            <div className="blog-img"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop" alt="AI in UK business"/></div>
            <div className="blog-body">
              <div className="blog-meta">By Marcus Thorne &nbsp;·&nbsp; February 28, 2026</div>
              <h3>AI Governance in UK Enterprises: Navigating the New Regulatory Framework</h3>
              <p>As the UK's AI regulation evolves, we explore the data, ethics, and process prerequisites for genuine AI-driven enterprise transformation.</p>
              <a href="#" className="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
