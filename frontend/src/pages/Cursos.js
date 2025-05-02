import React from "react";
import { Link } from "react-router-dom";
import "./Cursos.css"; // Puedes renombrar luego si cambias el nombre del componente

const Cursos = () => {
  return (
    <section className="cursos">
      <div className="contenedor video-demo">
        <h1 className="titulo-seccion">Descubre cómo funciona FREE TRADER</h1>
        
        <div className="video-container">
          <video controls className="video">
            <source src="/demo-video.mp4" type="video/mp4" />
            Tu navegador no soporta este video.
          </video>
        </div>

        <Link to="/curso-detalle/1" className="btn-inscribirse">
          Inscribirse
        </Link>
      </div>

      <div className="separador-2"></div>
    </section>
  );
};

export default Cursos;
