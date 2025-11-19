import React from 'react';

const CareerCard = ({ title, description, imgSrc }) => {
  return (
    <div className="card-custom career-card">
      {/* Imagen con efecto Zoom (clase card-img definida en tu CSS) */}
      <img 
        src={imgSrc} 
        alt={title} 
        className="card-img" 
        loading="lazy"
      />
      
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CareerCard;