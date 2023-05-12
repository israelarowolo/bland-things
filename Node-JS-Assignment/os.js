// `os` (Operating System) Module: This module is used to interact with the operating system 
// on your computer. It provides methods for getting information about the CPU, memory, and 
// network interfaces. 
// Example:

const os = require('os');

// Get CPU information
const cpus = os.cpus();
console.log(cpus);

// Get free memory
const freeMemory = os.freemem();
console.log(freeMemory);

