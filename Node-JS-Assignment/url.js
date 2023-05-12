// `url` Module: This module is used for parsing and formatting URLs. 
// Example:

const url = require('url');

const myUrl = new URL('https://example.com/path?id=567');

console.log(myUrl.href);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get('id'));

