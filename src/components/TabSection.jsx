// src/components/TabSection.jsx

import React, { useState } from 'react';

const TabSection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Estilos de botones de pestaña
  const getTabStyle = (index) => ({
    padding: '12px 25px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: activeTab === index ? 'var(--secondary-accent)' : 'var(--bg-section-dark)',
    color: activeTab === index ? 'var(--primary-dark)' : 'var(--text-light)',
    fontWeight: 'bold',
    borderRadius: '10px 10px 0 0',
    transition: 'all 0.3s',
    marginRight: '5px',
    boxShadow: activeTab === index ? '0 4px 10px rgba(0, 229, 255, 0.4)' : 'none',
  });

  // Estilos del contenedor de contenido
  const contentContainerStyle = { 
      border: `2px solid var(--secondary-accent)`, 
      padding: '2.5rem', 
      borderRadius: '0 15px 15px 15px', 
      backgroundColor: 'var(--primary-dark)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      gap: '3rem',
      flexWrap: 'wrap-reverse',
      color: 'var(--text-light)'
  };

  return (
    <div style={{ padding: '1rem 0', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Botones de Pestaña */}
      <div style={{ display: 'flex', marginBottom: '-2px', overflowX: 'auto' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={getTabStyle(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Contenido de Pestaña Activa */}
      <div style={contentContainerStyle}>
        <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ color: 'var(--highlight-color)', borderBottom: `2px solid var(--secondary-accent)`, paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>{tabs[activeTab].title}</h3>
            <p style={{ opacity: 0.9 }}>{tabs[activeTab].content}</p>
        </div>
        <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
            <img 
                src={tabs[activeTab].imgSrc} 
                alt={tabs[activeTab].title} 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }} 
                loading="lazy"
            />
        </div>
      </div>
    </div>
  );
};

export default TabSection;