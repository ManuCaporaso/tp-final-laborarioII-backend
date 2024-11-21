require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Importar las rutas de los módulos
const campeonatoRoutes = require('./common/routes/campeonatoRoutes');
const escuderiasRoutes = require('./common/routes/escuderiasRoutes');
const pilotosRoutes = require('./common/routes/pilotosRoutes');

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(morgan('dev')); // Log de solicitudes
app.use(express.json()); // Parsear cuerpos JSON
app.use(express.urlencoded({ extended: true })); // Parsear datos URL-encoded
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

// Rutas
app.use('/formulauno/campeonato', campeonatoRoutes); // Rutas para Campeonato
app.use('/formulauno/escuderias', escuderiasRoutes); // Rutas para Campeonato
app.use('/formulauno/pilotos', pilotosRoutes); // Rutas para Pilotos

// Endpoint principal de prueba
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); // Servir archivo HTML estático
});

// Exportar la aplicación
module.exports = app;
