const express = require('express');
const app = express();

// Elastic Beanstalk uses process.env.PORT
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>K21 Academy</title>
        <style>
            body {
                margin: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #90EE90;
                font-family: Arial, sans-serif;
            }
            h1 {
                font-size: 48px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>K21 Academy 2025</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});

