// controllers/campeonatoController.js
const Campeonato = require('../models/campeonatoModel');

const campeonatoController = {
  // Obtener todos los campeonatos
  async getAll(req, res) {
    try {
      const campeonatos = await Campeonato.findAll({
        include: {
          model: require('../models/pilotosModel'), // Incluye datos del piloto relacionado
          as: 'piloto',
        },
      });
      res.status(200).json(campeonatos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los campeonatos', error });
    }
  },

  // Obtener un campeonato por su ID
  async getById(req, res) {
    try {
      const campeonato = await Campeonato.findByPk(req.params.id, {
        include: {
          model: require('../models/pilotosModel'), // Incluye datos del piloto relacionado
          as: 'piloto',
        },
      });
      if (campeonato) {
        res.status(200).json(campeonato);
      } else {
        res.status(404).json({ message: 'Campeonato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el campeonato', error });
    }
  },
};

module.exports = campeonatoController;

