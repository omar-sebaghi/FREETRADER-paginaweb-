import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inscripcion.css';

const Inscripcion = ({ cursoId }) => {
    console.log("cursoId recibido en el frontend:", cursoId);
  
  const navigate = useNavigate();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
  });

  // Estado para controlar si la inscripción fue exitosa
  const [isInscribed, setIsInscribed] = useState(false);

  // Estado para almacenar preguntas y opciones
  const [preguntas, setPreguntas] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  // Obtener preguntas desde el backend
  useEffect(() => {
    fetch('http://localhost:3001/api/preguntas')
      .then((response) => response.json())
      .then((data) => setPreguntas(data.preguntas))
      .catch((error) => console.error('Error al obtener preguntas:', error));
  }, []);

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validar los campos del formulario
  const validateForm = () => {
    const errors = {};
    if (!formData.nombre) errors.nombre = "Este campo es obligatorio";
    if (!formData.email) errors.email = "Este campo es obligatorio";
    if (!formData.telefono) errors.telefono = "Este campo es obligatorio";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Enviar los datos al backend para crear la inscripción
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    
  // Obtener respuestas seleccionadas
  const respuestas = preguntas.map((pregunta) => {
    const selectedOption = document.querySelector(`input[name=pregunta_${pregunta.id}]:checked`);
    return selectedOption ? { preguntaId: pregunta.id, opcionId: parseInt(selectedOption.value) } : null;
  }).filter(Boolean);

  console.log("Respuestas recolectadas:", respuestas);

  // Validar que el usuario respondió todas las preguntas
  if (respuestas.length !== 4) {
    alert("Debe responder a todas las preguntas.");
    return;
  }

  console.log("📡 Enviando datos al backend:", { ...formData, cursoId, respuestas });

    const response = await fetch('http://localhost:3001/api/inscripcions/inscribirse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        cursoId, // Enviar el ID del curso seleccionado
        respuestas, // Enviar las respuestas seleccionadas
      }),
    });

    const result = await response.json();
    console.log("Respuesta del backend:", result);

    if (response.ok) {
      setIsInscribed(true);
    } else {
      alert('Error al inscribirse');
    }
  };

  return (
    <div className="inscripcion">
      {!isInscribed ? (
        <>
          {/* Formulario de Información Personal */}
          <div className="form-container">
            <h3>Información Personal</h3>
            <form onSubmit={handleSubmit} className="form-info-personal">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo <span className="asterisco">*</span></label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={formErrors.nombre ? 'error' : ''}
                />
                {formErrors.nombre && <p className="error-message">{formErrors.nombre}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="asterisco">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono <span className="asterisco">*</span></label>
                <div className="telefono-group">
                  <input
                    type="text"
                    name="telefono"
                    placeholder="Número de Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={formErrors.telefono ? 'error' : ''}
                  />
                </div>
                {formErrors.telefono && <p className="error-message">{formErrors.telefono}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input
                  type="number"
                  name="edad"
                  placeholder="Edad"
                  value={formData.edad}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>

          {/* Formulario de Información Profesional */}
          <div className="form-container">
            <h3>Información Profesional</h3>
            <form className="form-info-profesional">
              {preguntas.length > 0 &&
                preguntas.map((pregunta) => (
                  <div key={pregunta.id}>
                    <p><strong>{pregunta.texto}</strong></p>
                    <div className="opciones">
                      {pregunta.Opciones?.map((opcion) => (
                        <label key={opcion.id}>
                          <input type="radio" name={`pregunta_${pregunta.id}`} value={opcion.id} />
                          {opcion.texto}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
            </form>
          </div>

          {/* Botón de Inscripción */}
          <div className="boton-inscripcion">
            <button type="submit" onClick={handleSubmit}>Inscribirse</button>
          </div>
        </>
      ) : (
        <div className="inscripcion-exitosa">
          <h3>¡Inscripción exitosa!</h3>
          <p>Revisa tu correo electrónico, ahí recibirás los detalles del curso.</p>
        </div>
      )}
    </div>
  );
};

export default Inscripcion;
