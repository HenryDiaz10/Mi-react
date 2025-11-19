import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CampusTabs from '../components/CampusTabs';
import CareerCard from '../components/CareerCard';

// --- IMPORTACIÓN DE IMÁGENES DE CAMPUS ---
import casaDeLaCulturaImg from '../assets/casaDeLaCultura.jpg';
import sanLuisImg from '../assets/sanLuis.jpg';

// --- IMPORTACIÓN DE IMÁGENES DE CARRERAS ---
import contabilidadImg from '../assets/contabilidad.png'; 
import derechoImg from '../assets/derecho.jpg';
import hoteleriaYTurismoImg from '../assets/hoteleriaYTurismo.jpg';
import ingenieriaDeSistemasImg from '../assets/ingenieriaDeSistemas.png';
import administracionImg from '../assets/administracion.jpg'; 
import agronomiaImg from '../assets/culturaAmbientalYResponsabilidadSocial.jpg'; 

const University = () => {

  // Datos de Campus
  const campusesData = [
    {
      id: 'san-vicente',
      name: 'Casa de la Cultura',
      title: 'Sede: Casa de la Cultura',
      description: 'Ubicado en el corazón de Cañete, este campus ofrece modernas instalaciones, auditorios y espacios diseñados para potenciar el aprendizaje cultural y académico.',
      imgSrc: casaDeLaCulturaImg
    },
    {
      id: 'san-luis',
      name: 'Campus San Luis',
      title: 'Sede Académica: San Luis',
      description: 'Nuestro campus principal en San Luis brinda un entorno dinámico y amplio, con laboratorios de cómputo, bibliotecas especializadas y áreas verdes.',
      imgSrc: sanLuisImg
    }
  ];

  // Datos de Carreras (AHORA CON IMÁGENES)
  const careersData = [
    {
      id: 'admin',
      title: 'Administración',
      imgSrc: administracionImg, // Variable importada
      description: 'Gestión estratégica de organizaciones y optimización de recursos.'
    },
    {
      id: 'contabilidad',
      title: 'Contabilidad',
      imgSrc: contabilidadImg,
      description: 'Gestión financiera, tributaria, auditoría y control económico.'
    },
    {
      id: 'sistemas',
      title: 'Ing. de Sistemas',
      imgSrc: ingenieriaDeSistemasImg,
      description: 'Desarrollo de software, infraestructura TI e innovación tecnológica.'
    },
    {
      id: 'agronomia',
      title: 'Agronomía',
      imgSrc: agronomiaImg,
      description: 'Producción agrícola moderna y gestión ambiental sostenible.'
    },
    {
      id: 'turismo',
      title: 'Hotel. y Turismo',
      imgSrc: hoteleriaYTurismoImg,
      description: 'Gestión de servicios turísticos, hotelería y patrimonio.'
    },
    {
      id: 'derecho',
      title: 'Derecho',
      imgSrc: derechoImg,
      description: 'Defensa legal, asesoría jurídica y aplicación de la justicia.'
    }
  ];

  return (
    <section id="university" className="section">
      <SectionTitle
        title="Mi Universidad: UNDC"
        subtitle="Universidad Nacional de Cañete: Formando líderes para el futuro de la región."
        icon="🏛️"
      />

      <div className="university-description">
        <p>
          Estudio en la Universidad Nacional de Cañete (UNDC), una institución pública licenciada que se distingue por ofrecer programas académicos de calidad. Es aquí donde construyo mi base profesional.
        </p>
      </div>

      {/* TABS DE CAMPUS */}
      <SectionTitle title="Nuestros Campus" icon="📍" className="sub-section-title" />
      <CampusTabs campuses={campusesData} />

      {/* GRID DE CARRERAS CON IMÁGENES */}
      <SectionTitle title="Oferta Académica" icon="🎓" className="sub-section-title" />
      <p className="careers-intro-text">
        La UNDC ofrece diversas carreras profesionales enfocadas en la demanda actual:
      </p>
      
      {/* grid-container: Se encarga de las columnas y el centrado.
          careers-grid: Clase extra por si necesitamos ajustes específicos en el futuro.
      */}
      <div className="grid-container careers-grid">
        {careersData.map((career) => (
          <CareerCard 
            key={career.id}
            title={career.title}
            imgSrc={career.imgSrc} // Pasamos la imagen
            description={career.description}
          />
        ))}
      </div>

    </section>
  );
};

export default University;