import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div 
      className="home"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/segunda-inicio.jpg)` }}
    >
       {/* Línea separadora */}
       <div className="separador"></div>
      <div className="overlay">
        <h1>Centro de Educación - <span className="trader">FREE</span> TRADER</h1>
        <p>Explora nuestros cursos y empieza a aprender a programar desde ya.</p>
      </div>

      {/* Texto y flecha que solo aparece en formato móvil */}
      <div className="scroll-message">
        <p>Desliza hacia abajo para más información</p>
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default Home;
