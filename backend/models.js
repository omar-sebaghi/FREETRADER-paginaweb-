const { Sequelize, DataTypes } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('edufast', 'usuario', 'Omarleon10', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desactiva los logs SQL
});

// Modelo de Curso
const Curso = sequelize.define('Curso', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  precio: { type: DataTypes.FLOAT, allowNull: false },
});

// Modelo de Usuario (quien compra el curso)
const Usuario = sequelize.define('Usuario', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  telefono: { type: DataTypes.STRING, allowNull: false },
  edad: { type: DataTypes.INTEGER, allowNull: false },
});

// Modelo de Inscripción (asocia usuario con curso)
const Inscripcion = sequelize.define('Inscripcion', {
  fecha_inscripcion: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

// Modelo de Pregunta (asociada a un curso)
const Pregunta = sequelize.define('Pregunta', {
  texto: { type: DataTypes.STRING, allowNull: false },
  curso_id: { type: DataTypes.INTEGER, allowNull: false },
});

// Modelo de Opcion (asociada a una pregunta)
const Opcion = sequelize.define('Opcion', {
  texto: { type: DataTypes.STRING, allowNull: false },
  pregunta_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'Opciones',  // Asegura que use la tabla correcta
  timestamps: false       // Desactiva createdAt y updatedAt si no los usas
});


// Modelo de Respuesta (asociada a un usuario y una opción)
const Respuesta = sequelize.define('Respuesta', {
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  opcion_id: { type: DataTypes.INTEGER, allowNull: false },
  pregunta_id: { type: DataTypes.INTEGER, allowNull: false },
});

// Relacionar modelos

// Relación Curso y Pregunta (un curso tiene muchas preguntas)
Curso.hasMany(Pregunta, { foreignKey: 'curso_id' });
Pregunta.belongsTo(Curso, { foreignKey: 'curso_id' });

// Relación Pregunta y Opcion (una pregunta tiene muchas opciones)
Pregunta.hasMany(Opcion, { foreignKey: 'pregunta_id' });
Opcion.belongsTo(Pregunta, { foreignKey: 'pregunta_id' });

// Relación Usuario y Curso (muchos a muchos con Inscripcion intermedia)
Usuario.belongsToMany(Curso, { through: Inscripcion, foreignKey: 'usuario_id' });
Curso.belongsToMany(Usuario, { through: Inscripcion, foreignKey: 'curso_id' });

// Relación Usuario y Respuesta (un usuario puede tener muchas respuestas)
Usuario.hasMany(Respuesta, { foreignKey: 'usuario_id' });
Respuesta.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Relación Opcion y Respuesta (una opción puede tener muchas respuestas)
Opcion.hasMany(Respuesta, { foreignKey: 'opcion_id' });
Respuesta.belongsTo(Opcion, { foreignKey: 'opcion_id' });

// Relación Pregunta y Respuesta (una pregunta puede tener muchas respuestas)
Pregunta.hasMany(Respuesta, { foreignKey: 'pregunta_id' });
Respuesta.belongsTo(Pregunta, { foreignKey: 'pregunta_id' });

// Sincronizar la base de datos
sequelize.sync()
  .then(() => console.log('Base de datos conectada y modelos sincronizados'))
  .catch(err => console.log('Error al conectar con la base de datos', err));

module.exports = { sequelize, Usuario, Curso, Inscripcion, Pregunta, Opcion, Respuesta };
