const express = require('express');
const { Usuario, Inscripcion, Respuesta, Opcion, sequelize } = require('../models');
const { enviarCorreo } = require('../mailService');  // Importas la función enviarCorreo
const router = express.Router();

// Inscribir un usuario en un curso y guardar las respuestas
router.post('/inscribirse', async (req, res) => {
  console.log('Iniciando el proceso de inscripción...'); // Registro al inicio del proceso
  const transaction = await sequelize.transaction(); // Iniciamos una transacción

  try {
    const { nombre, email, telefono, edad, cursoId, respuestas } = req.body;

    console.log("Datos recibidos en el backend:", req.body);

    // Verificar que todas las respuestas estén presentes
    if (!cursoId) {
      console.error("Error: cursoId es undefined o null.");
      return res.status(400).json({ error: "El cursoId es obligatorio." });
    }

    if (!respuestas || respuestas.length !== 4) {
      console.error("Error: No se recibieron las respuestas correctamente.");
      return res.status(400).json({ error: 'Debe responder a todas las preguntas.' });
    }

    console.log("cursoId recibido:", cursoId);
    console.log("Respuestas recibidas:", respuestas);

    console.log('Verificando si el usuario ya existe...'); // Registro antes de buscar el usuario
    let usuario = await Usuario.findOne({ where: { email }, transaction });

    if (!usuario) {
      console.log('Usuario no encontrado, creando uno nuevo...');
      console.log('Creando usuario con los siguientes datos:', { nombre, email, telefono, edad });
      usuario = await Usuario.create({ nombre, email, telefono, edad }, { transaction });
    }
    else {
      console.log('Usuario ya existe:', usuario.email);
    }

    // Registrar la inscripción
    console.log('Registrando la inscripción...');
    const inscripcion = await Inscripcion.create(
      { usuario_id: usuario.id, curso_id: cursoId },
      { transaction }
    );

    // Guardar las respuestas
    for (let i = 0; i < respuestas.length; i++) {
      const { preguntaId, opcionId } = respuestas[i];

      console.log(`Buscando en la tabla Opcion con id=${opcionId} y pregunta_id=${preguntaId}`);

      const opcion = await Opcion.findOne({ 
        where: { id: opcionId, pregunta_id: preguntaId }, 
        transaction 
      });
      
      console.log("Resultado de la búsqueda en Opcion:", opcion ? opcion.toJSON() : "No encontrado");

      if (!opcion) {
        console.error(`Opción no válida para la pregunta ${preguntaId} y opción ${opcionId}`);
        throw new Error(`Opción no válida para la pregunta ${preguntaId} y opción ${opcionId}`);
      }

      console.log(`Opción válida encontrada: ${opcion.texto}`);

      // Crear la respuesta
      await Respuesta.create(
        { usuario_id: usuario.id, opcion_id: opcionId, pregunta_id: preguntaId },
        { transaction }
      );
    }

    // Confirmar la transacción si todo salió bien
    console.log('Transacción confirmada, enviando correo...');
    await transaction.commit();

    // Enviar el correo después de guardar las respuestas
    console.log('Preparándose para enviar correo a:', usuario.email); // Agregar registro antes de enviar
    console.log('cursoId que se enviará al mailService:', parseInt(cursoId));
    await enviarCorreo(usuario.email, parseInt(cursoId));  // Llamas a la función para enviar el correo
    console.log("Correo enviado exitosamente.");

    console.log("📧 Enviando respuesta de inscripción..."); // Registro antes de enviar la respuesta
    res.json({ mensaje: 'Inscripción y respuestas registradas exitosamente', inscripcion });

  } catch (error) {
    console.error("ERROR DETECTADO ANTES DEL COMMIT:", error.message);
    await transaction.rollback(); // Revertir cambios
    console.error("Transacción revertida por error:", error.message);
    res.status(500).json({ error: error.message || 'Error al inscribirse' });
  }
});

module.exports = router;
