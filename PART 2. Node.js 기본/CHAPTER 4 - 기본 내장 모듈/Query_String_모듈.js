const url = require('url');
const querystring = require('querystring');

const parsedObject = url.parse('https://www.youtube.com/watch?v=7N9fc_oYcJc');
console.log(querystring.parse(parsedObject.query));
