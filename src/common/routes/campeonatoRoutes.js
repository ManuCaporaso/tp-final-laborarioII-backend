// routes/campeonatoRoutes.js
const express = require('express');
const campeonatoController = require('../controllers/campeonatoController');

const router = express.Router();

// Ruta para obtener todos los campeonatos
router.get('/', campeonatoController.getAll);

// Ruta para obtener un campeonato por su ID
router.get('/:id', campeonatoController.getById);

module.exports = router;
