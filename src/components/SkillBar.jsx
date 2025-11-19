// src/components/SkillBar.jsx

import React from 'react';

const SkillBar = ({ skill, percentage, isDark }) => {
    const barColor = 'var(--secondary-accent)';
    const trackColor = isDark ? 'rgba(255, 255, 255, 0.1)' : '#e0e0e0';
    
    // CORRECCIÓN CLAVE: Usamos var(--primary-dark) para fondos claros
    const textColor = isDark ? 'var(--text-light)' : 'var(--primary-dark)'; 

    const barStyle = {
        width: `${percentage}%`,
        backgroundColor: barColor,
        borderRadius: '5px',
        height: '100%',
        transition: 'width 2s ease-in-out'
    };

    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.5rem', 
                fontWeight: '600', 
                color: textColor // Aplicado aquí
            }}>
                <span>{skill}</span>
                <span>{percentage}%</span>
            </div>
            <div style={{ 
                height: '10px', 
                backgroundColor: trackColor, 
                borderRadius: '5px', 
                overflow: 'hidden',
                boxShadow: isDark ? 'inset 0 1px 3px rgba(0,0,0,0.5)' : 'inset 0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <div style={barStyle}></div>
            </div>
        </div>
    );
};

export default SkillBar;