const asyncHandler = require('express-async-handler')
const fs = require('fs');
const xml2js = require('xml2js');

// GET endpoint to retrieve XML data
const getAllUsers = asyncHandler(async (req, res) => {
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
    const matchingUser = content.find((each) => each.email[0] === input);
    return matchingUser || null;
};

// GET endpoint to retrieve XML data

const getUser = asyncHandler(async (req, res) => {
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

            const matchingUser = findMatchingUsers(result['users']['user'], user);

            if (matchingUser)
            {
                res.json(matchingUser);
            } else
            {
                res.status(404).send('User not found');
            }
        });
    });
});


// POST endpoint to save XML data
const addUser = asyncHandler(async (req, res) => {
    // Read existing XML data from the file
    fs.readFile('./data/users.xml', 'utf-8', (readErr, data) => {
        if (readErr)
        {
            console.error(readErr);
            return res.status(500).send('Error reading XML file');
        }

        // Parse existing XML data
        xml2js.parseString(data, (parseErr, result) => {
            if (parseErr)
            {
                console.error(parseErr);
                return res.status(500).send('Error parsing XML data');
            }

            // Initialize an empty structure if result is undefined or result.users is undefined
            if (!result || !result.users)
            {
                result = { users: { user: [] } };
                // Check if the new user's id is already present
            } else
            {
                const existingIds = result.users.user.map(user => user.id);
                if (existingIds[0][0].includes(req.body.id))
                {
                    return res.status(400).send('Error: User with the same id already exists');
                }
            }


            // Create a new user object
            const newUser = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };

            // Append the new user to the existing users array or create a new array
            const users = result.users.user || [];
            users.push(newUser);

            // Update the XML structure
            result.users = { user: users };

            // Build XML from the updated structure
            const xmlBuilder = new xml2js.Builder();
            const updatedXml = xmlBuilder.buildObject(result);

            // Write the updated XML to the file
            fs.writeFile('./data/users.xml', updatedXml, (writeErr) => {
                if (writeErr)
                {
                    console.error(writeErr);
                    return res.status(500).send('Error writing XML file');
                }

                res.send('XML data saved successfully');
            });
        });
    });
});

// POST endpoint to save or update XML data
const updateUser = asyncHandler(async (req, res) => {
    const newUserData = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    // Read existing XML data from the file
    fs.readFile('./data/users.xml', 'utf-8', (readErr, data) => {
        if (readErr)
        {
            console.error(readErr);
            return res.status(500).send('Error reading XML file');
        }

        // Parse existing XML data
        xml2js.parseString(data, (parseErr, result) => {
            if (parseErr)
            {
                console.error(parseErr);
                return res.status(500).send('Error parsing XML data');
            }

            // Initialize an empty structure if result is undefined or result.users is undefined
            if (!result || !result.users)
            {
                result = { users: { user: [] } };
            }
            console.log(req.params.id)
            // Find the user by id
            const existingUser = result.users.user.find(user => user.id[0] === req.params.id);

            if (existingUser)
            {
                // Update details if the user already exists
                existingUser.name[0] = newUserData.name;
                existingUser.email[0] = newUserData.email;
                existingUser.password[0] = newUserData.password;
            } else
                return res.status(400).send('Error: User does not exists');
            // Update the XML structure
            const xmlBuilder = new xml2js.Builder();
            const updatedXml = xmlBuilder.buildObject(result);

            // Write the updated XML to the file
            fs.writeFile('./data/users.xml', updatedXml, (writeErr) => {
                if (writeErr)
                {
                    console.error(writeErr);
                    return res.status(500).send('Error writing XML file');
                }

                res.send('XML data saved successfully');
            });
        });
    });
});

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser
}