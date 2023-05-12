// `http` Module: This module is used to create a web server and handle HTTP requests and responses. 
// Example:

const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

// Listen to port
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

