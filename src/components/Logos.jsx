import React from 'react';

const Logos = () => {
  return (
    <div className="logos">
      <div className="wrap">
        <p style={{textAlign:'center', fontSize:'.78rem', letterSpacing:'.15em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'.5rem'}}>Trusted by Leading UK & Global Organizations</p>
        <div className="logos-row">
          <span>HSBC Global</span>
          <span>Unilever</span>
          <span>BP Energy</span>
          <span>GSK Pharma</span>
          <span>Vodafone Group</span>
        </div>
      </div>
    </div>
  );
};

export default Logos;
