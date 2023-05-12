// `stream` Module: This module is used to handle streaming data, such as reading from and 
// writing to files or network sockets. 
// Example:

const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

