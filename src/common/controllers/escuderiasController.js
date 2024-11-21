const Escuderia = require('../models/escuderiasModel');

// Obtener todas las escuderías
exports.getEscuderias = async (req, res) => {
  try {
    const escuderias = await Escuderia.findAll();
    res.status(200).json(escuderias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las escuderías.' });
  }
};

// Obtener una escudería por ID
exports.getEscuderiaById = async (req, res) => {
  try {
    const { id } = req.params;
    const escuderia = await Escuderia.findByPk(id);

    if (!escuderia) {
      return res.status(404).json({ error: 'Escudería no encontrada.' });
    }

    res.status(200).json(escuderia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la escudería.' });
  }
};

// Crear una nueva escudería
exports.createEscuderia = async (req, res) => {
  try {
    const { nombre, pais, imagen } = req.body;
    const nuevaEscuderia = await Escuderia.create({ nombre, pais, imagen });

    res.status(201).json(nuevaEscuderia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la escudería.' });
  }
};

// Actualizar una escudería
exports.updateEscuderia = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, pais, imagen } = req.body;

    const escuderia = await Escuderia.findByPk(id);

    if (!escuderia) {
      return res.status(404).json({ error: 'Escudería no encontrada.' });
    }

    escuderia.nombre = nombre;
    escuderia.pais = pais;
    escuderia.imagen = imagen;

    await escuderia.save();

    res.status(200).json(escuderia);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la escudería.' });
  }
};

// Eliminar una escudería
exports.deleteEscuderia = async (req, res) => {
  try {
    const { id } = req.params;

    const escuderia = await Escuderia.findByPk(id);

    if (!escuderia) {
      return res.status(404).json({ error: 'Escudería no encontrada.' });
    }

    await escuderia.destroy();

    res.status(200).json({ message: 'Escudería eliminada con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la escudería.' });
  }
};
