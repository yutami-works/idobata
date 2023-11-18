const { Server } = require('socket.io');

const socketRouter = (server) => {
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log('a user connection');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = socketRouter;
