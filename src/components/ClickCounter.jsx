// src/components/ClickCounter.jsx

import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h3 style={{ color: '#0d47a1' }}>Contador Simple de Clicks</h3>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
        Clicks realizados: <span style={{ fontWeight: 'bold', color: '#ff9800' }}>{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#42a5f5',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
      >
        Aumentar Click
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#ff9800',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '10px',
          transition: 'background-color 0.3s'
        }}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default ClickCounter;