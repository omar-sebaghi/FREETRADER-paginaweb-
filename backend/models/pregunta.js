// models/pregunta.js
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../models');


class Pregunta extends Model {}

Pregunta.init({
  texto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Pregunta',
});

module.exports = Pregunta;
