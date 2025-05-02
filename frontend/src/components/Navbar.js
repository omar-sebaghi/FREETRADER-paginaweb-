import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-top">
        <div className="navbar-container">
          <h1 className="logo">
            <Link to="/"><span className="trader">FREE</span> TRADER</Link>
          </h1>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
            <li><Link to="/sobre-nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
          </ul>
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>

      <nav className={`navbar navbar-fixed ${isScrolled ? "visible" : ""}`}>
        <div className="navbar-container">
          <h1 className="logo">
            <Link to="/"><span className="trader">FREE</span> TRADER</Link>
          </h1>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
            <li><Link to="/sobre-nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
          </ul>
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
