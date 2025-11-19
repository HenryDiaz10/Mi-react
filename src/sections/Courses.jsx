import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

// --- 1. TUS IMPORTACIONES DE IMÁGENES ORIGINALES ---
import CulturaAmb from '../assets/culturaAmbientalyResponsabilidadSocial.jpg';
import InvestigacionOp from '../assets/investigacionOperativaII.jpg';
import DesarrolloWeb from '../assets/desarrolloWebFullStack.jpg';
import Estadistica from '../assets/estadisticaYProbabilidades.jpg';
import DerechoEmp from '../assets/derechoEmpresarial.jpg';
import FundamentosDB from '../assets/fundamentosDeBaseDeDatos.png';
import SistemasDig from '../assets/sistemasDigitales.jpg';

const Courses = () => {
  // --- 2. DATOS (Ahora la variable se llama 'courses' para coincidir con el return) ---
  const courses = [
    { 
      title: 'Cultura Amb. y Resp. Soc.', 
      description: 'Promueve la conciencia ecológica y la responsabilidad social.', 
      docente: 'Ing. Yangali Quispe Klaus', 
      imgSrc: CulturaAmb, 
      icon: '🌍' 
    },
    { 
      title: 'Investigación Operativa II', 
      description: 'Análisis de datos y toma de decisiones probabilísticas.', 
      docente: 'Ing. Daga Chaca Marisol', 
      imgSrc: InvestigacionOp, 
      icon: '📈' 
    },
    { 
      title: 'Desarrollo Web Full Stack', 
      description: 'Construcción de aplicaciones con React y Backend.', 
      docente: 'Ing. Huancahuire Bravo Claudio', 
      imgSrc: DesarrolloWeb, 
      icon: '💻' 
    },
    { 
      title: 'Estadística y Prob.', 
      description: 'Análisis e interpretación de fenómenos mediante datos.', 
      docente: 'Lic. Colquepisco Paucar Nilo', 
      imgSrc: Estadistica, 
      icon: '📊' 
    },
    { 
      title: 'Derecho Empresarial', 
      description: 'Fundamentos legales para la gestión de negocios.', 
      docente: 'Abg. Choquevilca Cuno Maria', 
      imgSrc: DerechoEmp, 
      icon: '⚖️' 
    },
    { 
      title: 'Fundamentos de BD', 
      description: 'Modelado y gestión eficiente de bases de datos.', 
      docente: 'Ing. Salcedo Rodas Percy', 
      imgSrc: FundamentosDB, 
      icon: '🗄️' 
    },
    { 
      title: 'Sistemas Digitales', 
      description: 'Diseño de circuitos y sistemas electrónicos básicos.', 
      docente: 'Ing. Daga Chaca Marisol', 
      imgSrc: SistemasDig, 
      icon: '⚙️' 
    },
  ];

  return (
    <section id="courses" className="section">
      <SectionTitle 
        title="Mis Cursos - IV Ciclo" 
        subtitle="Materias que están formando mi perfil profesional este semestre en la UNDC."
        icon="📚" 
      />
      
      {/* Usamos el grid-container del nuevo CSS para que se alineen perfecto */}
      <div className="grid-container">
        {courses.map((course, index) => (
          <Card
            key={index}
            title={course.title}
            description={course.description}
            imgSrc={course.imgSrc}
            footerText={course.docente} // Se mostrará en azul/celeste según el CSS
            icon={course.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;