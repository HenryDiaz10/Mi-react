import React from 'react';

const SectionTitle = ({ title, subtitle, icon }) => {
  return (
    <div className="section-header">
      <h2>{icon} {title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;