import React from 'react';

const Home = () => {
  const logos = {
    react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  };

  return (
    <section id="home" className="hero-section">
      
      <div className="hero-content-wrapper">
        
        {/* TEXTO IZQUIERDA */}
        <div style={{ flex: 1, paddingRight: '2rem', zIndex: 20 }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Hola, soy <span style={{ color: 'var(--accent-cyan)' }}>Henry!</span>
          </h1>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem', opacity: 0.9 }}>
            Estudiante de Ingeniería de Sistemas & Desarrollador Web en formación
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Explorando el mundo del desarrollo Full Stack con React, pasión por el código limpio y el diseño moderno.
          </p>
          <a href="#about" className="btn-primary">Descubre mi trabajo</a>
        </div>
        
        {/* ANIMACIÓN DERECHA */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
            
            {/* 1. LOGO CENTRAL (REACT) - NO GIRA CON LA ÓRBITA, GIRA SOBRE SÍ MISMO */}
            <img 
              src={logos.react} 
              alt="React Logo" 
              className="center-logo"
            />

            {/* 2. CONTENEDOR QUE ORBITA (Aquí van los satélites) */}
            <div className="orbit-container">
                <div className="satellite-icon"><img src={logos.html} alt="HTML" /></div>
                <div className="satellite-icon"><img src={logos.css} alt="CSS" /></div>
                <div className="satellite-icon"><img src={logos.js} alt="JS" /></div>
                <div className="satellite-icon"><img src={logos.node} alt="Node" /></div>
                <div className="satellite-icon"><img src={logos.mysql} alt="MySQL" /></div>
                <div className="satellite-icon"><img src={logos.git} alt="Git" /></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Home;  