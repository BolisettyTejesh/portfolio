import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(17, 19, 21, 0.8)',
      backdropFilter: 'blur(24px)',
      marginTop: '2rem'
    }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Designed & Developed by <span className="text-gradient" style={{fontWeight: 600}}>Bolisetty Naga Venkata Tejesh</span>
      </p>
    </footer>
  );
};

export default Footer;
