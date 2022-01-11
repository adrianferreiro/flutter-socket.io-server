const  {io} = require('../index.js');

//mensajes de Sockets
//client: va a ser una computadora o dispositivo que se acaba de conectar a mi socket server
io.on('connection', client => {
    console.log('Cliente conectado');
    //lo de abajo es lo que se va a disparar cuando éste cliente en particular se desconecte
    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });
    
    //on: para escuchar un mensaje ya que el emit usamos en index.html
    client.on('mensaje', (payload)=>{
        //evento que se realiza cuando
        console.log('Mensaje!!!', payload);
        //lo de abajo emite un mensaje a todos los clientes conectados
        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });
});