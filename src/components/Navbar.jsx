import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Cursos', href: '#courses' },
    { name: 'UNDC', href: '#university' },
    { name: 'Demos', href: '#features' },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">Henry Web</a>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.name}><a href={link.href}>{link.name}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;