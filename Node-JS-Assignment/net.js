// `net` Module: This module provides an asynchronous network API for creating servers and clients. 
// Example:

const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(8080, 'localhost');

