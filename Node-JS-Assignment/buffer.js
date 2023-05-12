// `buffer` Module: This module provides a way to handle binary data and provides 
// methods for creating and manipulating buffers. 
// Example:

const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from(' World');
const buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString());

