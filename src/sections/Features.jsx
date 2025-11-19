import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const InteractiveDemo = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
      <h3 style={{ color: 'var(--primary-blue)' }}>Contador de clicks</h3>
      <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary-deep)', margin: '1rem 0' }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={() => setCount(c => c + 1)} className="btn-primary">Aumentar</button>
        <button onClick={() => setCount(0)} className="btn-outline">Reset</button>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="section">
      <SectionTitle title="React en Acción" subtitle="Pequeñas demostraciones de interactividad." icon="⚛️" />
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <InteractiveDemo />
      </div>
    </section>
  );
};

export default Features;