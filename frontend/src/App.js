import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import CursoDetalle from './pages/CursoDetalle';
import Inscripcion from './pages/Inscripcion';
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "./components/scrolltotop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      {/* Espaciado para que Home no quede oculto detrás del Navbar */}
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Cursos />
              <SobreNosotros />
            </>
          } />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/curso-detalle/:id" element={<CursoDetalle />} />
          <Route path="/inscripcion/:id" element={<Inscripcion />} />
        </Routes>

      </div>
      <Contacto />
    </div>
  );
};

export default App;
