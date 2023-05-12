// `querystring` Module: This module is used for parsing and formatting query strings. 
// Example:

const querystring = require('querystring');

const params = { name: 'John', age: 30 };
const queryString = querystring.stringify(params);

console.log(queryString);

const parsedParams = querystring.parse(queryString);
console.log(parsedParams);

