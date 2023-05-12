// `https` Module: This module is used to create an HTTPS server for handling secure HTTP connections. 
// Example:

const https = require('https');

https.get('https://api.openai.com/v1/engines', (res) => {
  console.log('Status code:', res.statusCode);
});
