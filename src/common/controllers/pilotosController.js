const Pilotos = require('../models/pilotosModel');

// Obtener todos los pilotos
exports.obtenerPilotos = async (req, res) => {
  try {
    const pilotos = await Pilotos.findAll();
    res.status(200).json(pilotos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pilotos', error });
  }
};

// Crear un nuevo piloto
exports.crearPiloto = async (req, res) => {
  try {
    const { nombre, numero, equipo, imagen } = req.body;
    const nuevoPiloto = await Pilotos.create({ nombre, numero, equipo, imagen });
    res.status(201).json(nuevoPiloto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el piloto', error });
  }
};

// Actualizar un piloto
exports.actualizarPiloto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, numero, equipo, imagen } = req.body;
    const piloto = await Pilotos.findByPk(id);

    if (!piloto) {
      return res.status(404).json({ message: 'Piloto no encontrado' });
    }

    await piloto.update({ nombre, numero, equipo, imagen });
    res.status(200).json(piloto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el piloto', error });
  }
};

// Eliminar un piloto
exports.eliminarPiloto = async (req, res) => {
  try {
    const { id } = req.params;
    const piloto = await Pilotos.findByPk(id);

    if (!piloto) {
      return res.status(404).json({ message: 'Piloto no encontrado' });
    }

    await piloto.destroy();
    res.status(200).json({ message: 'Piloto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el piloto', error });
  }
};
