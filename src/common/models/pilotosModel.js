const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la conexión a la base de datos esté correctamente configurada

const Pilotos = sequelize.define('Pilotos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  equipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'pilotos',
  timestamps: false, // No utilizar timestamps si no están definidos en la base de datos
});

// Relación con Campeonato
Pilotos.hasMany(require('./campeonatoModel'), {
  foreignKey: 'piloto_id',  // La clave foránea en la tabla campeonato
  as: 'campeonatos',  // El alias que usarás para acceder a los campeonatos de este piloto
});

module.exports = Pilotos;

