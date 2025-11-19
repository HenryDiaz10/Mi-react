// src/components/AnimatedHero.jsx

import React from 'react';

const AnimatedHero = () => {
    // Estilos internos y animaciones
    const heroStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '80vh',
        gap: '4rem',
        flexWrap: 'wrap-reverse',
        padding: '0 10%',
        color: 'var(--text-light)'
    };

    const textStyle = {
        flex: '1 1 500px',
        maxWidth: '650px',
        animation: 'slideInLeft 1s ease-out forwards'
    };

    const imageContainerStyle = {
        flex: '1 1 300px',
        textAlign: 'center',
        animation: 'fadeIn 1.5s ease-out forwards',
    };
    
    // Keyframes CSS para las animaciones
    const styleSheet = `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    `;

    return (
        <div style={heroStyle}>
            <style>{styleSheet}</style>
            <div style={textStyle}>
                <h1 style={{ fontSize: '4rem', color: 'var(--secondary-accent)', marginBottom: '1rem', textShadow: '0 0 10px rgba(0, 229, 255, 0.6)' }}>
                    Web con React!
                </h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: '300', marginBottom: '2rem' }}>
                    Diseño realizado por Sebastián Rojas Castillo, estudiante de Ingeniería de Sistemas en la UNDC
                </p>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', opacity: 0.8 }}>
                    Este proyecto solo es una prueba utilizando react y aplicando el desarrollo basado en componentes, código limpio y un diseño responsive impecable.
                </p>
                <a href="#about" style={{ 
                    display: 'inline-block', 
                    marginTop: '2.5rem', 
                    padding: '1.2rem 2.5rem', 
                    backgroundColor: 'var(--highlight-color)', 
                    color: 'white', 
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 15px rgba(255, 145, 0, 0.5)',
                    transition: 'background-color 0.3s, transform 0.2s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                    Explora mi Perfil
                </a>
            </div>
            <div style={imageContainerStyle}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="Logo de React Animado"
                    style={{
                        width: '100%',
                        maxWidth: '380px',
                        height: 'auto',
                        filter: 'drop-shadow(0 0 20px var(--secondary-accent))',
                        animation: 'spin 12s linear infinite'
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedHero;