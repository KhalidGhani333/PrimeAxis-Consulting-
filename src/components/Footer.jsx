import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-main">
        <div className="footer-col">
          <div className="footer-logo">Prime<span>Axis.</span></div>
          <p>Delivering strategic clarity and operational excellence to the UK's most ambitious organisations since 2007.</p>
          <div className="footer-phone">+44 <span>20 7946 0123</span></div>
          <div className="footer-email">contact@primeaxis.co.uk</div>
        </div>
        <div className="footer-col">
          <h4>Capabilities</h4>
          <ul>
            <li><a href="#">Corporate Strategy</a></li>
            <li><a href="#">Operational Resilience</a></li>
            <li><a href="#">M&A Advisory</a></li>
            <li><a href="#">Digital Transformation</a></li>
            <li><a href="#">ESG & Net Zero</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About the Firm</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">UK Tax Strategy</a></li>
          </ul>
        </div>
        <div className="footer-col footer-newsletter">
          <h4>Stay Informed</h4>
          <p>Receive strategic insights and UK market updates directly from our partners.</p>
          <input type="email" placeholder="Business email address"/>
          <button>Sign Up</button>
          <p style={{fontSize:'.78rem', marginTop:'.7rem', color:'#556677'}}>We respect your privacy. UK GDPR Compliant.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div><a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer">Powered By AxisTechGroup</a></div>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
