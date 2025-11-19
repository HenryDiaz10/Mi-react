import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FotoDePerfil from '../assets/sobreMi.png'; // Asegúrate que la ruta sea correcta

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--accent-soft)' }}>
            <SectionTitle 
                title="Sobre Mí" 
                subtitle="Conoce al desarrollador detrás del código."
                icon="👨‍💻"
            />

            <div className="about-container">
                <div className="glass-card">
                    
                    {/* Columna 1: Imagen Estilizada */}
                    <div className="profile-wrapper">
                        <img 
                            src={FotoDePerfil} 
                            alt="Henry Diaz" 
                            className="profile-img" 
                        />
                    </div>

                    {/* Columna 2: Contenido */}
                    <div className="about-text">
                        <h3>Ingeniero de Sistemas en Formación</h3>
                        
                        <p>
                            Soy estudiante del <strong>IV Ciclo</strong> en la Universidad Nacional de Cañete (UNDC). 
                            Mi pasión radica en transformar líneas de código en soluciones reales. Me especializo en 
                            el desarrollo web moderno, buscando siempre el equilibrio perfecto entre 
                            <span style={{ color: 'var(--primary-blue)', fontWeight: 'bold' }}> lógica robusta </span> 
                            y <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}> diseño intuitivo</span>.
                        </p>

                        <div className="quote-box">
                            "Considero que cada reto académico es una oportunidad para fortalecer mi creatividad, 
                            disciplina y capacidad de análisis."
                        </div>

                        <p>
                            Actualmente estoy profundizando en el ecosistema <strong>React</strong> y arquitecturas Full Stack, 
                            aplicando buenas prácticas de Clean Code para crear software escalable.
                        </p>

                        {/* Badges / Etiquetas Modernas */}
                        <div className="tech-stats">
                            <div className="stat-badge">🎓 IV Ciclo</div>
                            <div className="stat-badge">💻 Full Stack Dev</div>
                            <div className="stat-badge">🏛️ UNDC</div>
                            <div className="stat-badge">🚀 Innovación</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;