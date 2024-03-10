// playlistControllers.js

const connection = require('../config/connectDB');

// Create a new playlist
exports.createPlaylist = (req, res) => {
    const { title, creator } = req.body;
    // Check if the creator exists in the users table
    connection.query('SELECT * FROM users WHERE user_id = ?', [creator], (error, results) => {
        if (error)
        {
            console.error('Error creating playlist:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Creator not found');
            return;
        }
        // Creator exists, proceed with playlist creation
        connection.query(
            'INSERT INTO playlists (title, creator) VALUES (?, ?)',
            [title, creator],
            (error, result) => {
                if (error)
                {
                    console.error('Error creating playlist:', error);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                res.json(result);
            }
        );
    });
};

// Get all playlists
exports.getAllPlaylists = (req, res) => {
    connection.query('SELECT * FROM playlists', (error, results) => {
        if (error)
        {
            console.error('Error getting playlists:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
};

// Get playlist by ID
exports.getPlaylistById = (req, res) => {
    const playlistId = req.params.id;
    connection.query('SELECT * FROM playlists WHERE playlist_id = ?', [playlistId], (error, results) => {
        if (error)
        {
            console.error('Error getting playlist:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Playlist not found');
            return;
        }
        res.json(results[0]);
    });
};

// Update playlist by ID
exports.updatePlaylist = (req, res) => {
    const playlistId = req.params.id;
    const { title, creator } = req.body;
    // Check if the creator exists in the users table
    connection.query('SELECT * FROM users WHERE user_id = ?', [creator], (error, results) => {
        if (error)
        {
            console.error('Error updating playlist:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Creator not found');
            return;
        }
        // Creator exists, proceed with playlist update
        connection.query(
            'UPDATE playlists SET title = ?, creator = ? WHERE playlist_id = ?',
            [title, creator, playlistId],
            (error, result) => {
                if (error)
                {
                    console.error('Error updating playlist:', error);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                res.json(result);
            }
        );
    });
};

// Delete playlist by ID
exports.deletePlaylist = (req, res) => {
    const playlistId = req.params.id;
    connection.query('DELETE FROM playlists WHERE playlist_id = ?', [playlistId], (error, result) => {
        if (error)
        {
            console.error('Error deleting playlist:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
};
