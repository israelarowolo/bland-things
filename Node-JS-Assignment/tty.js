// `tty` Module: This module provides functionality for interacting with terminal devices, 
// such as reading input and writing output. 
// Example:

const tty = require('tty');

if (tty.isatty(0)) {
  console.log('Input is a terminal device');
} else {
  console.log('Input is not a terminal device');
}

