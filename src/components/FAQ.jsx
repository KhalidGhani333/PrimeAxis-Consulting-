import React, { useState } from 'react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What types of organisations does PrimeAxis Consulting work with?",
      a: "We work with a broad spectrum of organisations, from high-growth London tech scale-ups to FTSE 100 conglomerates. Our deepest sector expertise lies in financial services, UK retail, healthcare, energy, and manufacturing. We have active engagements with both domestic firms and international multinationals operating in the UK market."
    },
    {
      q: "How long does a typical consulting engagement last?",
      a: "Our engagements range from 6-week diagnostic sprints to 24-month multi-phase transformation programs. Most strategy projects run 3–6 months, while operational resilience and digital transformation engagements typically span 9–18 months. We also offer ongoing retainer models for clients who prefer continuous advisory access to our partners."
    },
    {
      q: "What makes PrimeAxis Consulting different from global 'Big Four' firms?",
      a: "We combine the methodological rigor of the global top-tier firms (our founders are ex-McKinsey and BCG) with a more agile, partner-led delivery model. Unlike larger firms, our senior partners remain embedded in the project throughout the entire engagement lifecycle. We focus on on-ground results rather than just high-level slide decks."
    },
    {
      q: "Do you offer multi-region or virtual consulting?",
      a: "Yes. We offer hybrid engagement models combining on-site workshops at our London, Manchester, or Edinburgh offices with virtual advisory sessions. We have also successfully delivered remote-first projects for global clients expanding their operations into the UK and European markets."
    },
    {
      q: "How do I initiate a consultation for my business?",
      a: "The most efficient way is to request a complimentary 60-minute discovery session through our Contact page. One of our senior partners will speak with you directly to understand your specific business challenge. We then propose a bespoke engagement structure designed to deliver measurable ROI — no generic templates."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Got Questions?</div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q} <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-a" style={{display: openFaq === i ? 'block' : 'none'}}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
