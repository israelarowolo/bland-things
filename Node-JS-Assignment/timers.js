// `timers` Module: This module provides functions for scheduling and executing code at specified intervals. 
// Example:

const { setTimeout, setInterval, clearInterval } = require('timers');

const timer = setTimeout(() => {
  console.log('Timer expired');
}, 10000);

clearTimeout(timer) 

const interval = setInterval(() => {
  console.log('Interval expired');
}, 5000);

// clearInterval(interval); 
// uncomment the above to cancel execution of the timeout

