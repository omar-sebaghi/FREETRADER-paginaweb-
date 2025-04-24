import React from 'react';
import { useParams } from 'react-router-dom';
import './CursoDetalle.css'; // Estilos específicos
import Inscripcion from './Inscripcion'; // Importamos el formulario de inscripción

const CursoDetalle = () => {
  const { id } = useParams(); // Obtener el ID del curso desde la URL

  // Datos del curso
  const curso = {
    id,
    nombre: id === '1' ? 'Curso de ' : 'Curso de ',
    descripcion: id === '1'
      ? 'Aprende a desarrollar aplicaciones web modernas con <span class="highlight">React</span>. Desde los fundamentos hasta conceptos <span class="highlight">avanzados</span>.'
      : 'Domina <span class="highlight-2">JavaScript</span>, el lenguaje esencial para el desarrollo web. Conoce buenas prácticas y <span class="highlight-2">Frameworks populares</span>.',
    puntos: id === '1'
      ? ['Componentes reutilizables', 'Gestión de estado con <span class="highlight">hooks</span>', 'Integración con <span class="highlight">APIs</span>', 'Inscribirse al curso es completamente <span class="highlight">GRATIS</span>']
      : ['Manipulación del <span class="highlight-2">DOM</span>', 'Programación <span class="highlight-2">asincrónica</span>', '<span class="highlight-2">ES6</span> y más allá', 'Inscribirse al curso es completamente <span class="highlight-2">GRATIS</span>'],
    imagen: id === '1' ? '/react.solo.png' : '/javascript.solo.png',  // Ruta a la imagen en la carpeta public
  };

  return (
    <div className="curso-container">
      <div className="curso-detalle">
        <h1 className="titulo-curso">
          {curso.nombre}
          <img src={curso.imagen} alt={curso.nombre} className="imagen-curso" />
        </h1>
        <p className="descripcion" dangerouslySetInnerHTML={{ __html: curso.descripcion }}></p>
        <ul>
          {curso.puntos.map((punto, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: `✅ ${punto}` }}></li>
          ))}
        </ul>
      </div>

      <Inscripcion cursoId={curso.id} />
    </div>
  );
};

export default CursoDetalle;
