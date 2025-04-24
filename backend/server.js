const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');  // Importamos la conexión de Sequelize
const cursosRouter = require('./routes/cursos');  // Rutas de cursos
const usuariosRouter = require('./routes/usuarios');  // Rutas de usuarios
const inscripcionsRouter = require('./routes/inscripcions');  // Nueva ruta de inscripciones
const Pregunta = require('./models/pregunta');
const Opciones = require('./models/opciones');

const app = express();
const PORT = 3001; // Cambia el puerto si es necesario

// Middlewares
app.use(cors());
app.use(express.json()); // Para manejar peticiones en formato JSON

// Conectar con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida correctamente'))
  .catch((err) => console.error('No se pudo conectar a la base de datos:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

app.get('/api/preguntas', async (req, res) => {
  try {
    const preguntas = await Pregunta.findAll({
      include: {
        model: Opciones, 
        attributes: ['id', 'texto'],
      }
    });

    console.log('Preguntas encontradas:', JSON.stringify(preguntas, null, 2));
    res.json({ preguntas });
  } catch (error) {
    console.error('Error al obtener las preguntas:', error);  // ⬅️ Esto imprimirá el error real
    res.status(500).json({ message: 'Error al obtener las preguntas', error: error.message });
  }
});


// Rutas API
app.use('/api/cursos', cursosRouter);  
app.use('/api/usuarios', usuariosRouter);
app.use('/api/inscripcions', inscripcionsRouter);  // Nueva ruta de inscripciones

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
