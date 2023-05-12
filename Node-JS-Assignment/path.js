// `path` Module: This module is used for working with file and directory paths. 
// It provides methods for normalizing, joining, and resolving paths. 
// Example:

const path = require('path');

// Join paths
const fullPath = path.join(__dirname, 'public', 'index.html');
console.log(fullPath);

// Get file extension
const ext = path.extname(fullPath);
console.log(ext);

