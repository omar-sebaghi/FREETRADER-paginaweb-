import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Estado para navbar fija
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para la hamburguesa

  // Detectar scroll para mostrar la navbar fija después del Home
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para cerrar el menú después de hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cierra el menú
  };

  return (
    <>
      {/* Navbar inicial fusionada con Home */}
      <nav className="navbar navbar-top">
        <div className="navbar-container">
          <h1 className="logo">
            <Link to="/"><span className="trader">FREE</span> TRADER</Link>
          </h1>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
            <li><Link to="/cursos" onClick={handleLinkClick}>Cursos</Link></li>
            <li><Link to="/sobre-nosotros" onClick={handleLinkClick}>Sobre Nosotros</Link></li>
          </ul>
          {/* Icono de menú hamburguesa */}
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>

      {/* Navbar fija que aparece después del Home */}
      <nav className={`navbar navbar-fixed ${isScrolled ? "visible" : ""}`}>
        <div className="navbar-container">
          <h1 className="logo">
            <Link to="/"><span className="trader">FREE</span> TRADER</Link>
          </h1>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
            <li><Link to="/cursos" onClick={handleLinkClick}>Cursos</Link></li>
            <li><Link to="/sobre-nosotros" onClick={handleLinkClick}>Sobre Nosotros</Link></li>
          </ul>
          {/* Icono de menú hamburguesa */}
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
