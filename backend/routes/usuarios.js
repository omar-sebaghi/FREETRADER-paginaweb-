const express = require('express');
const { Usuario, Inscripcion, Opcion, Respuesta } = require('../models'); // Importa Opcion y Respuesta
const router = express.Router();

// Inscribir un usuario en un curso y guardar las respuestas
router.post('/inscribirse', async (req, res) => {
  try {
    const { nombre, email, telefono, edad, cursoId, respuestas } = req.body;

    // Verificar que todas las respuestas estén presentes
    if (!respuestas || respuestas.length !== 4) {
      return res.status(400).json({ error: 'Debe responder a todas las preguntas.' });
    }

    console.log("Datos recibidos:", req.body); // Depuración para ver los datos recibidos

    // Crear el usuario
    const usuario = await Usuario.create({ nombre, email, telefono, edad });

    // Registrar la inscripción
    const inscripcion = await Inscripcion.create({
      usuario_id: usuario.id,
      curso_id: cursoId,
    });

    // Guardar las respuestas
    for (let i = 0; i < respuestas.length; i++) {
      const { preguntaId, opcionId } = respuestas[i];

      console.log(`Verificando opción para pregunta ${preguntaId} con opción ${opcionId}`); // Depuración

      // Verificar que la opción existe
      const opcion = await Opcion.findOne({ where: { id: opcionId, pregunta_id: preguntaId } });

      if (!opcion) {
        console.error(`Opción no válida para la pregunta ${preguntaId} y opción ${opcionId}`); // Depuración
        return res.status(400).json({ error: `Opción no válida para la pregunta ${preguntaId} y opción ${opcionId}` });
      }

      console.log(`Opción válida encontrada: ${opcion.texto}`); // Depuración

      // Crear la respuesta
      await Respuesta.create({
        usuario_id: usuario.id,
        opcion_id: opcionId,
        pregunta_id: preguntaId,
      });
    }

    // Responder con el mensaje de éxito y los datos de inscripción
    res.json({ mensaje: 'Inscripción y respuestas registradas exitosamente', inscripcion });
  } catch (error) {
    console.error("Error en la inscripción:", error);
    res.status(500).json({ error: 'Error al inscribirse' });
  }
});

module.exports = router;
