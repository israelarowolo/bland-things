// `string_decoder` Module: This module provides a way to decode buffer objects into strings. 
// Example:

const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buffer = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(buffer));

