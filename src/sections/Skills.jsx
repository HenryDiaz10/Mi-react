import React from 'react';
import SectionTitle from '../components/SectionTitle';

const SkillItem = ({ name, percentage }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
      <span style={{ color: 'var(--text-main)' }}>{name}</span>
      <span style={{ color: 'var(--primary-blue)', fontWeight: 'bold' }}>{percentage}%</span>
    </div>
    <div style={{ height: '12px', background: '#e9ecef', borderRadius: '6px', overflow: 'hidden', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
      <div style={{ 
        width: `${percentage}%`, 
        height: '100%', 
        background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-cyan))',
        borderRadius: '6px',
        transition: 'width 1.5s ease-in-out'
      }}></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'React.js / Hooks', percentage: 75 },
    { name: 'JavaScript (ES6+)', percentage: 85 },
    { name: 'HTML5 & CSS3 Moderno', percentage: 90 },
    { name: 'MySQL / Bases de Datos', percentage: 70 },
    { name: 'Git & GitHub', percentage: 80 },
  ];

  return (
    <section id="skills" className="section">
      <SectionTitle 
        title="Habilidades Técnicas" 
        subtitle="Herramientas y tecnologías que utilizo para dar vida a mis proyectos."
        icon="🚀"
      />
      
      {/* NUEVA ESTRUCTURA DE LAYOUT */}
      <div className="skills-layout">
        
        {/* Columna 1: Texto Explicativo */}
        <div className="skills-text-col">
          <h3>Mi Stack Tecnológico</h3>
          <p>
            En la Universidad Nacional de Cañete, me enfoco en solidificar los fundamentos 
            de la Ingeniería de Software, combinando la lógica de programación con un diseño 
            de interfaz intuitivo.
          </p>
          <p>
            Siempre estoy buscando aprender nuevas librerías y optimizar el rendimiento de mis aplicaciones.
          </p>
        </div>

        {/* Columna 2: Tarjeta de Progreso */}
        <div className="skills-card-col">
          {skills.map((s, i) => <SkillItem key={i} {...s} />)}
        </div>

      </div>
    </section>
  );
};

export default Skills;