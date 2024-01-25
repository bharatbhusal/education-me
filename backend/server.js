const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { parseString, Builder } = require('xml2js');

const app = express();
const port = 3001; // You can change this to any available port

app.use(bodyParser.text({ type: 'application/xml' }));

// Endpoint to read XML data
app.get('api/getXmlData', (req, res) => {
    // Replace 'users.xml' with the path to your XML file
    const xmlData = fs.readFileSync('data/users.xml', 'utf-8');
    res.send(xmlData);
});

// Endpoint to update XML data
app.post('/api/updateXmlData', (req, res) => {
    const updatedXml = req.body;

    // Replace 'users.xml' with the path to your XML file
    fs.writeFileSync('data/users.xml', updatedXml, 'utf-8');

    res.send('XML data updated successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
