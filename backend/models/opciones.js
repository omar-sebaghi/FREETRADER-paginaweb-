// models/opciones.js
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../models'); 


const Pregunta = require('./pregunta');  

class Opciones extends Model {}

Opciones.init({
  texto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pregunta', 
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Opciones',
  tableName: 'opciones',
});

// Definir las asociaciones
Opciones.belongsTo(Pregunta, { foreignKey: 'pregunta_id' });  // Opción pertenece a una pregunta
Pregunta.hasMany(Opciones, { foreignKey: 'pregunta_id' });    // Una pregunta tiene muchas opciones

module.exports = Opciones;
