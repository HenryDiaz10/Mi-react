import React from 'react';

const Card = ({ title, description, imgSrc, footerText, icon }) => {
  return (
    <div className="card-custom">
      {imgSrc && <img src={imgSrc} alt={title} className="card-img" loading="lazy" />}
      <div className="card-body">
        <h3 className="card-title">{icon} {title}</h3>
        <p className="card-text">{description}</p>
        {footerText && <small className="card-footer">{footerText}</small>}
      </div>
    </div>
  );
};

export default Card;