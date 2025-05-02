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
                En <strong>Free Trader</strong> Hemos desarrollado un bot que opera de forma automática y eficiente, integrándose con servicios de copytrading existentes sin necesidad de intervención manual.
              </p>
              <p>
                Nuestro sistema está basado en un bot de trading programado internamente, con lógica estratégica de entrada/salida, gestión de riesgo y optimización constante. 
                Nos enfocamos en resultados reales y control de pérdidas.
              </p>
            </div>

            {/* Datos de impacto */}
            <div className="datos-impacto">
              <div className="dato">
                <span className="numero">+3 años</span>
                <p>Desarrollando y afinando nuestro algoritmo de trading</p>
              </div>
              <div className="dato">
                <span className="numero">0 emociones</span>
                <p>Decisiones basadas en lógica y datos, no en impulsos</p>
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
              <p>Automatización avanzada con estrategias probadas.</p>
            </div>
            <div className="valor">
              <img src="/comunidad.jpg" alt="Transparencia" />
              <h3>Transparencia</h3>
              <p>Acceso a estadísticas y resultados.</p>
            </div>
            <div className="valor">
              <img src="/compromiso.jpg" alt="Resultados" />
              <h3>Resultados</h3>
              <p>Enfocados en mejorar rendimiento, reducir errores y cuidar el capital.</p>
            </div>
          </div>
        </div>

        <div className="separador-1"></div>

        {/* Sección de Equipo */}
        <div className="equipo">
          <h2>¿Quiénes somos?</h2>
          <div className="equipo-lista">
            <div className="miembro">
              <img src="/foto-CV_omar.jpg" />
              <h3>Omar Sebaghi</h3>
              <p>Fundador & Desarrollador del bot de trading</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SobreNosotros;
