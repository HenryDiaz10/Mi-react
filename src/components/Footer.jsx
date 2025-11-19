// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer 
        className="footer" 
        style={{ 
            backgroundColor: 'var(--primary-dark)', 
            color: 'var(--text-light)', 
            padding: '2.5rem 10%', 
            textAlign: 'center',
            borderTop: `5px solid var(--secondary-accent)`
        }}
    >
      <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
        ✨ Desarrollado con React y Principios de Desarrollo Web - Ingeniería de Sistemas. 
      </p>
      <p style={{ opacity: 0.8 }}>
        Proyecto del curso de Desarrollo Web Full Stack - IV CICLO. © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;