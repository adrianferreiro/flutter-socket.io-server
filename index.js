const express = require ('express');
const path = require('path');
require('dotenv').config();//lee el archivo .env y establece las var de entorno
//App de Express
const app = express();

//node server
const server = require ('http').createServer(app);
//le damos como argunmento el servidor que acabamos de crear
//documentación de ésto en:
//https://www.npmjs.com/package/socket.io
module.exports.io = require('socket.io')(server);

//Llamamos al archivo socket.js
require('./sockets/socket.js');


//path público 
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

//usamos ahora las variables de entorno de .env
server.listen(process.env.PORT, (err) =>{
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', 3000);
})