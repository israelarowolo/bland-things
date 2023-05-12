// `zlib` Module: This module provides compression and decompression functionalities using the zlib library. 
// Example:

const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt.gz');

readStream.pipe(gzip).pipe(writeStream);

