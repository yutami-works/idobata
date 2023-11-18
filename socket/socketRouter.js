const { Server } = require('socket.io');

// ハンドラー読み込み
const messageHandler = require('./handlers/message');

const socketRouter = (server) => {
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log('a user connection');

    socket.on('chat message', (msg) => {
      messageHandler(io, socket, msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = socketRouter;
