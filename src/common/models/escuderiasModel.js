const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Configura correctamente tu conexión a la base de datos

const Escuderia = sequelize.define('Escuderia', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'escuderias',
  timestamps: false, // La tabla no tiene columnas createdAt ni updatedAt
});

module.exports = Escuderia;
