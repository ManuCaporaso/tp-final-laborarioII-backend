const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carga las variables del archivo .env

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario de la base de datos
  process.env.DB_PASSWORD,  // Contraseña de la base de datos
  {
    host: process.env.DB_HOST,      // Host del servidor
    dialect: process.env.DB_DIALECT, // Dialecto de la base de datos (por ejemplo, 'mysql', 'postgres')
    logging: false,                 // Desactiva los logs de las consultas
  }
);

// Verificar conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con la base de datos.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();

module.exports = sequelize;
