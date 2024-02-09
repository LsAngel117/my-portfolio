import React, { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60; // Ajusta la posición del scroll
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#">INICIO</a></li>
            <li><a href="#">SOBRE MÍ</a></li>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">PROYECTOS</a></li>
            <li><a href="#">CONTACTO</a></li>
          </ul>
        </div>  
      </div>
    </nav>
  );
};

export default NavBar;
