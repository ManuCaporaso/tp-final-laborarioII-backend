const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la conexión a la base de datos esté configurada

const Campeonato = sequelize.define('Campeonato', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  posicion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puntos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numero_auto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  escuderia_imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen_piloto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'campeonato',
  timestamps: false, // No utilizar timestamps si no están definidos en la base de datos
});



module.exports = Campeonato;
