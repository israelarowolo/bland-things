// `readline` Module: This module provides an interface for reading input from readable streams, 
// such as the command line. 
// Example:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

