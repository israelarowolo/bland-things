// `fs`(File System) Module: This module is used to interact with the file system on your computer. 
// It provides methods for creating, reading, updating, and deleting files and directories. 
// Example:


const fs = require('fs');
// Read file
fs.readFile('file.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('file.txt', 'Hello once again World', function(err) {
  if (err) throw err;
  console.log('File written successfully!');
});
