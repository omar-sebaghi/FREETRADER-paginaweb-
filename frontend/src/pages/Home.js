import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div 
      className="home"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/segunda-inicio.jpg)` }}
    >
      <div className="separador"></div>

      <div className="overlay">
        <h1>CopyTrading Automatizado - <span className="trader">BOT</span> TRADER</h1>
        <p>Invierte como los profesionales sin mover un dedo. Nuestro bot opera por ti en tiempo real.</p>
      </div>

      <div className="scroll-message">
        <p>Desliza hacia abajo para descubrir cómo funciona</p>
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default Home;
