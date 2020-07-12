'use strict';
const express = require('express');
// Constants
const PORT = 5000;
const HOST = 'localhost';
// App
const app = express();
app.get('/', (req, res) => {
  res.sendfile('./index.html');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);