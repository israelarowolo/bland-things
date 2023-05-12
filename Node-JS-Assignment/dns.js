// `dns` Module: This module is used for DNS (Domain Name System) operations, such as 
// domain resolution and reverse lookup. 
// Example:

const dns = require('dns');

dns.lookup('www.example.com', (err, address, family) => {
  console.log('Address:', address);
});

