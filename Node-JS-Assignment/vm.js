// `vm` Module: This module provides an API for running JavaScript code within a virtual machine context. 
// Example:

const vm = require('vm');

const context = { x: 1, y: 2 };
const code = 'console.log(x + y)';

vm.createContext(context);
vm.runInContext(code, context);

