// `util` Module: This module provides utility functions that are commonly used in Node.js 
// applications, such as formatting strings and working with objects. 
// Example:

const util = require('util');

const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(util.inspect(obj));

