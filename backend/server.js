// server.js
const express = require('express');
const xml2js = require('xml2js');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET endpoint to retrieve XML data
app.get('/users', (req, res) => {
    fs.readFile('./data/users.xml', 'utf-8', (err, data) => {
        if (err)
        {
            console.error(err);
            return res.status(500).send('Error reading XML file');
        }

        // Parse XML to JSON
        xml2js.parseString(data, (parseErr, result) => {
            if (parseErr)
            {
                console.error(parseErr);
                return res.status(500).send('Error parsing XML');
            }
            res.json(result);
        });
    });
});

// Function to compare input string with names of users and return details of matching users
const findMatchingUsers = (content, input) => {
    return content.filter((each) => each.name[0] === input);
};

// GET endpoint to retrieve XML data
app.get('/users/:user', (req, res) => {
    const user = req.params["user"].toLocaleLowerCase()
    fs.readFile('./data/users.xml', 'utf-8', (err, data) => {
        if (err)
        {
            console.error(err);
            return res.status(500).send('Error reading XML file');
        }

        // Parse XML to JSON
        xml2js.parseString(data, (parseErr, result) => {
            if (parseErr)
            {
                console.error(parseErr);
                return res.status(500).send('Error parsing XML');
            }
            res.json(findMatchingUsers(result['users']['user'], user));
        });
    });
});

// POST endpoint to save XML data
app.post('/users', (req, res) => {
    const xmlBuilder = new xml2js.Builder();
    const xml = xmlBuilder.buildObject(req.body);

    // Write XML to file
    fs.writeFile('./data/users.xml', xml, (err) => {
        if (err)
        {
            console.error(err);
            return res.status(500).send('Error writing XML file');
        }
        res.send('XML data saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
