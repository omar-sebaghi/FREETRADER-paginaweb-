import React from 'react';
import './CursoDetalle.css'; // Estilos específicos
import Inscripcion from './Inscripcion'; // Formulario de inscripción

const CursoDetalle = () => {
  // Información del curso único
  const curso = {
    nombre: 'Automatización de Copytrading con IA',
    descripcion:
      'Descubre cómo nuestro bot de trading automatizado, con inteligencia artificial, te ayuda a operar sin intervención manual. ¡Comienza hoy mismo! Recibirás todos los datos necesarios por correo, incluyendo el broker para crear tu cuenta y el enlace a nuestra cuenta de copytrading.',
    puntos: [
      'Operaciones automáticas sin intervención manual',
      'Estrategias basadas en IA y datos reales',
      'Integración con plataformas de copytrading',
      'Acceso gratuito, sin experiencia previa necesaria',
    ],
    imagen: '/trading-icon.png',
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

      <Inscripcion />
    </div>
  );
};

export default CursoDetalle;
