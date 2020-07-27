const express = require('express');
const app = express();
app.use(function (req,res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hello express</h1>');
});
