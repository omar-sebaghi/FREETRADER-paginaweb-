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
          <a href="#" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
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
          <li><a href="/">Home</a></li>
          <li><a href="/cursos">Cursos</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
        </ul>
      </div>

      {/* Sección Derecha: Contacto */}
      <div className="footer-right">
        <h3>CONTÁCTANOS</h3>
        <div className="contact-info">
          <a href="mailto:contacto@freetrader.com">
            <i className="fa-solid fa-envelope"></i> Email
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i> @free_trader
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;
