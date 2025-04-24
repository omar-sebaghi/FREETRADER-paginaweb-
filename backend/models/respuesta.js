const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Respuesta extends Model {}

Respuesta.init({
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios', // Relación con la tabla de usuarios
      key: 'id',
    },
  },
  opcion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'opciones', // Relación con la tabla de opciones
      key: 'id',
    },
  },
  pregunta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'preguntas', // Relación con la tabla de preguntas
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Respuesta',
});

module.exports = Respuesta;
