// `crypto` Module: This module is used to perform cryptographic operations, such as 
// hashing and encryption. 
// Example:

const crypto = require('crypto');

// Create hash
const hash = crypto.createHash('sha256');
hash.update('Hello World');
console.log(hash.digest('hex'));

// Create cipher and decipher
const algorithm = 'aes-192-cbc';
const password = 'secret';
const key = crypto.scryptSync(password, 'salt', 24); // Generate a key of the appropriate length
const iv = crypto.randomBytes(16); // Generate a random initialization vector

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

