const socketIo = require('socket.io');
const http = require('http');


module.exports = (app) => {
    const server = http.Server(app);
    const io = socketIo(server);
    require('../middlewares/socketCors').config(io);
    //socket endpoints
    io.on('connect',(client) =>{
        //socket join room
        client.on('join',(data)=>{
            //join the room
            client.join(data.roomid);
            io.in(data.roomid).emit('NewUserJoined',{
                displayName:data.displayName
            })
        })
    })
    return server;
}