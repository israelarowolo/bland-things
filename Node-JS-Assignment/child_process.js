// `child_process` Module: This module is used to spawn child processes and 
// execute commands in the system's shell. 
// Example:

const { exec } = require('child_process');

exec('ls -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
});

