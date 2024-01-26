// server.js
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/users', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});