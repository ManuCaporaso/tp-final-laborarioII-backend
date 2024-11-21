const express = require('express');
const router = express.Router();
const pilotosController = require('../controllers/pilotosController');

// Rutas CRUD
router.get('/', pilotosController.obtenerPilotos); // Obtener todos los pilotos
router.post('/', pilotosController.crearPiloto); // Crear un nuevo piloto
router.put('/:id', pilotosController.actualizarPiloto); // Actualizar un piloto
router.delete('/:id', pilotosController.eliminarPiloto); // Eliminar un piloto

module.exports = router;
