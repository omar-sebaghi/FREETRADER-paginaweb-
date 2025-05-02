import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <footer className="footer">
      {/* Sección Izquierda: Logo y Redes */}
      <div className="footer-left">
        <div className="footer-logo">
          <span className="logo-text">
            <span className="green">FREE</span> TRADER
          </span>
        </div>

        <hr className="footer-line-movil" />

        <div className="footer-social">
          <a href="https://instagram.com/freetraderr" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/+34694223067?text=Hola, me gustaría obtener más información sobre el servicio de copytrading." target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <hr className="footer-line" />

        <a href="/politica-privacidad" className="footer-privacy">
          Política de Privacidad
        </a>
      </div>

      <hr className="footer-line-movil" />

      {/* Sección Central: Páginas */}
      <div className="footer-center">
        <h3>PÁGINAS</h3>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/cursos">Copytrading</a></li>
          <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
        </ul>
      </div>

      {/* Sección Derecha: Contacto */}
      <div className="footer-right">
        <h3>CONTÁCTANOS</h3>
        <div className="contact-info">
          <a href="mailto:contacto@freetrader.com">
            <i className="fa-solid fa-envelope"></i> contacto@freetrader.com
          </a>
          <a href="https://instagram.com/freetraderr" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i> @freetraderr
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;
