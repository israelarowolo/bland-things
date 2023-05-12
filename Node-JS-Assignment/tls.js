// `tls` Module: This module provides functionality for creating 
// TLS/SSL (Transport Layer Security/Secure Sockets Layer) secured servers and clients. 
// Example:

const tls = require('tls');
const fs = require('fs'); // Import the fs module

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = tls.createServer(options, (socket) => {
  socket.write('Welcome to the TLS secured server\r\n');
  socket.pipe(socket);
});

server.listen(443);

