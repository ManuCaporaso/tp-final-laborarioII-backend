const express = require('express');
const router = express.Router();
const escuderiaController = require('../controllers/escuderiasController');

// Obtener todas las escuderías
router.get('/', escuderiaController.getEscuderias);

// Obtener una escudería por ID
router.get('/:id', escuderiaController.getEscuderiaById);

// Crear una nueva escudería
router.post('/', escuderiaController.createEscuderia);

// Actualizar una escudería
router.put('/:id', escuderiaController.updateEscuderia);

// Eliminar una escudería
router.delete('/:id', escuderiaController.deleteEscuderia);

module.exports = router;
