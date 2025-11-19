import React, { useState } from 'react';

const CampusTabs = ({ campuses }) => {
  // Estado para saber qué campus está activo (el primero por defecto)
  const [activeTab, setActiveTab] = useState(campuses[0].id);

  // Buscamos los datos del campus activo
  const activeCampus = campuses.find(campus => campus.id === activeTab);

  return (
    <div className="campus-tabs-container">
      {/* Botones de Navegación (Pestañas) */}
      <div className="campus-tab-buttons">
        {campuses.map((campus) => (
          <button
            key={campus.id}
            className={`campus-tab-button ${activeTab === campus.id ? 'active' : ''}`}
            onClick={() => setActiveTab(campus.id)}
          >
            {campus.name}
          </button>
        ))}
      </div>

      {/* Contenido del Campus (Tarjeta Animada) */}
      <div className="campus-tab-content">
        {activeCampus && (
          // Usamos 'key' para forzar que React reinicie la animación al cambiar de tab
          <div key={activeCampus.id} className="campus-card"> 
            <div className="campus-description">
              <h3>{activeCampus.title}</h3>
              <p>{activeCampus.description}</p>
            </div>
            <div className="campus-image-wrapper">
              {/* Aquí se usa la variable de imagen importada */}
              <img src={activeCampus.imgSrc} alt={activeCampus.name} className="campus-image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusTabs;