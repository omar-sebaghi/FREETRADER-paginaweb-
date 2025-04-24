// routes/cursos.js
const express = require('express');
const { Curso } = require('../models');
const router = express.Router();

// Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los cursos' });
  }
});

// Agregar un curso
router.post('/', async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const nuevoCurso = await Curso.create({ nombre, descripcion, precio });
    res.json(nuevoCurso);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el curso' });
  }
});

module.exports = router;
