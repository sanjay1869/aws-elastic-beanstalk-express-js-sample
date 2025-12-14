const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to K21 Academy Project 2025'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
