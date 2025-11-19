import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Secciones
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Courses from './sections/Courses';
import University from './sections/University';
import Features from './sections/Features';

import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Courses />
        <University />
        <Features />
      </main>
      <Footer />
      {/* Botón flotante simple */}
      <a 
        href="#home" 
        style={{
          position: 'fixed', bottom: '30px', right: '30px',
          background: 'var(--primary-blue)', color: 'white',
          width: '50px', height: '50px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none', fontSize: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 999
        }}
      >
        ↑
      </a>
    </div>
  );
};

export default App;