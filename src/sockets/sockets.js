const socketIo = require('socket.io');
const http = require('http');


module.exports = (app) => {
    const server = http.Server(app);
    const io = socketIo(server);
    require('../middlewares/socketCors').config(io);
    //socket endpoints
    io.on('connected',(socket) =>{
        console.log("New Connection");
    })
    return server;
}