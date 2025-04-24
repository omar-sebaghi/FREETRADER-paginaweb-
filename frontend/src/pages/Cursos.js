import React from "react";
import { Link } from "react-router-dom";
import "./Cursos.css"; 

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      nombre: "Curso de React",
      descripcion: "Aprende a desarrollar aplicaciones web con React.",
      imagen: "/imagen-react.jpg",
    },
    {
      id: 2,
      nombre: "Curso de JavaScript",
      descripcion: "Domina el lenguaje de programación JavaScript.",
      imagen: "/js-imagen.jpg",
    },
  ];

  return (
    <section className="cursos">
      <div className="contenedor">
        <h1 className="titulo-seccion">Nuestros Cursos</h1>
        <div className="curso-lista">
          {cursos.map((curso) => (
            <div className="curso" key={curso.id}>
              <img src={curso.imagen} alt={curso.nombre} className="curso-imagen" />
              <div className="curso-info">
                <h2>{curso.nombre}</h2>
                <p>{curso.descripcion}</p>
                <Link to={`/curso-detalle/${curso.id}`} className="btn-detalles">
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="separador-2"></div>
    </section>
    
  );
};

export default Cursos;
