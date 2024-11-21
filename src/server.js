const app = require('./app'); // Importar la aplicación
const http = require('http');

// Crear el servidor HTTP
const server = http.createServer(app);

// Definir el puerto
const port = process.env.PORT || 3000;

// Iniciar el servidor
server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = { server }; // Exportar el servidor (opcional, solo si lo necesitas en otro archivo)
