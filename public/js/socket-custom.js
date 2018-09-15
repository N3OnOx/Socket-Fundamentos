var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// On: Escuchar 
socket.on('disconnect', function() {
    console.log('Perdimos la conexion');
});

// Emit: Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Respusta: ', resp);
});


// Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje);
});