const message = (io, socket, msg) => {
  console.log(`message: ${msg}`);
  io.emit('chat message', msg);
}

module.exports = message;
