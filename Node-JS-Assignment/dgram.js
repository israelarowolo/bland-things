// `dgram` Module: This module provides functionality for creating 
// UDP (User Datagram Protocol) sockets. 
// Example:

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Received message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.bind(8080);

