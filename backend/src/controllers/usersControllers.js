// userControllers.js

const connection = require('../config/connectDB');

// Create a new user
exports.createUser = (req, res) => {
    const { username, full_name, role, password, dp, bio, gmail } = req.body;
    connection.query(
        'INSERT INTO users (username, full_name, role, password, dp, bio, gmail) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [username, full_name, role, password, dp, bio, gmail],
        (error, result) => {
            if (error)
            {
                console.error('Error creating user:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(result);
        }
    );
};

// Get all users
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error)
        {
            console.error('Error getting users:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
};

// Get user by ID
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    connection.query('SELECT * FROM users WHERE user_id = ?', [userId], (error, results) => {
        if (error)
        {
            console.error('Error getting user:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('User not found');
            return;
        }
        res.json(results[0]);
    });
};

// Get user by ID
exports.login = (req, res) => {
    console.log(req.body)
    const reqEmail = req.body.email;
    const reqPassword = req.body.password;
    console.log(reqEmail, reqPassword)
    connection.query('SELECT password FROM users WHERE gmail = ?', [reqEmail], (error, results) => {
        if (error)
        {
            console.error('Error getting user:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('User not found');
            return;
        }
        res.json(results[0].password === reqPassword ? "Login Success" : "Login failed");
    });
};

// Update user by ID
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, full_name, role, password, dp, bio, gmail } = req.body;
    connection.query(
        'UPDATE users SET username = ?, full_name = ?, role = ?, password = ?, dp = ?, bio = ?, gmail = ? WHERE user_id = ?',
        [username, full_name, role, password, dp, bio, gmail, userId],
        (error, result) => {
            if (error)
            {
                console.error('Error updating user:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(result);
        }
    );
};

// Delete user by ID
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    connection.query('DELETE FROM users WHERE user_id = ?', [userId], (error, result) => {
        if (error)
        {
            console.error('Error deleting user:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
};
