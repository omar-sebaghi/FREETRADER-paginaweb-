import React from 'react';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros">
      <div className="contenedor">
        {/* Imagen de fondo con información */}
        <div className="imagen-fondo" style={{ backgroundImage: `url('/sep09-nosotros.jpg')` }}>
          <div className="contenido-sobre-imagen">
            {/* Historia y descripción */}
            <div className="historia">
              <h2>Sobre Nosotros</h2>
              <p>
                En nuestra academia, formamos programadores listos para la industria tech. Nuestro método combina 
                mentoría personalizada, proyectos reales y herramientas actualizadas para garantizar el éxito de cada estudiante.
              </p>
              <p>
                Desde nuestros inicios, hemos ayudado a miles de alumnos a desarrollar su carrera en tecnología, trabajando en 
                empresas líderes o emprendiendo sus propios proyectos.
              </p>
            </div>

            {/* Datos de impacto */}
            <div className="datos-impacto">
              <div className="dato">
                <span className="numero">+5000</span>
                <p>Estudiantes formados en desarrollo web y software</p>
              </div>
              <div className="dato">
                <span className="numero">+95%</span>
                <p>Tasa de empleabilidad en empresas tecnológicas</p>
              </div>
              <div className="dato">
                <span className="numero">100%</span>
                <p>Clases prácticas y proyectos reales desde el día 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="valores">
          <h2>Nuestros Valores</h2>
          <div className="valores-lista">
            <div className="valor">
              <img src="/inovacion.png" alt="Innovación" />
              <h3>Innovación</h3>
              <p>Nos mantenemos a la vanguardia con tecnologías y metodologías actualizadas.</p>
            </div>
            <div className="valor">
              <img src="/comunidad.jpg" alt="Comunidad" />
              <h3>Comunidad</h3>
              <p>Fomentamos el aprendizaje colaborativo y el apoyo mutuo entre estudiantes.</p>
            </div>
            <div className="valor">
              <img src="/compromiso.jpg" alt="Compromiso" />
              <h3>Compromiso</h3>
              <p>Nos dedicamos al éxito de cada estudiante, brindando mentoría y acompañamiento constante.</p>
            </div>
          </div>
        </div>

        <div className="separador-1"></div>


        {/* Sección de Equipo */}
        <div className="equipo">
          <h2>Conoce a Nuestro Equipo</h2>
          <div className="equipo-lista">
            <div className="miembro">
              <img src="/carlos.jpg" alt="Carlos Martínez" />
              <h3>Carlos Martínez</h3>
              <p>Fundador & CEO</p>
            </div>
            <div className="miembro">
              <img src="/ana-lopez.jpg" alt="Ana López" />
              <h3>Ana López</h3>
              <p>Directora Académica</p>
            </div>
            <div className="miembro">
              <img src="/pedro-sa.jpg" alt="Pedro Sánchez" />
              <h3>Pedro Sánchez</h3>
              <p>Mentor Senior en Desarrollo Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
