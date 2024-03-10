// likeControllers.js

const connection = require('../config/connectDB');

// Create a new like
exports.createLike = (req, res) => {
    const { liked_content, liked_by, date } = req.body;
    // Check if the content and user exist
    connection.query('SELECT * FROM content WHERE content_id = ?', [liked_content], (error, contentResults) => {
        if (error)
        {
            console.error('Error creating like:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (contentResults.length === 0)
        {
            res.status(404).send('Content not found');
            return;
        }
        connection.query('SELECT * FROM users WHERE user_id = ?', [liked_by], (error, userResults) => {
            if (error)
            {
                console.error('Error creating like:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            if (userResults.length === 0)
            {
                res.status(404).send('User not found');
                return;
            }
            // Content and user exist, proceed with like creation
            connection.query(
                'INSERT INTO likes (liked_content, liked_by, date) VALUES (?, ?, ?)',
                [liked_content, liked_by, date],
                (error, result) => {
                    if (error)
                    {
                        console.error('Error creating like:', error);
                        res.status(500).send('Internal Server Error');
                        return;
                    }
                    res.json(result);
                }
            );
        });
    });
};

// Get all likes
exports.getAllLikes = (req, res) => {
    connection.query('SELECT * FROM likes', (error, results) => {
        if (error)
        {
            console.error('Error getting likes:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
};

// Get like by ID
exports.getLikeById = (req, res) => {
    const likeId = req.params.id;
    connection.query('SELECT * FROM likes WHERE like_id = ?', [likeId], (error, results) => {
        if (error)
        {
            console.error('Error getting like:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Like not found');
            return;
        }
        res.json(results[0]);
    });
};

// Update like by ID
exports.updateLike = (req, res) => {
    const likeId = req.params.id;
    const { liked_content, liked_by, date } = req.body;
    // Check if the content and user exist
    connection.query('SELECT * FROM content WHERE content_id = ?', [liked_content], (error, contentResults) => {
        if (error)
        {
            console.error('Error updating like:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (contentResults.length === 0)
        {
            res.status(404).send('Content not found');
            return;
        }
        connection.query('SELECT * FROM users WHERE user_id = ?', [liked_by], (error, userResults) => {
            if (error)
            {
                console.error('Error updating like:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            if (userResults.length === 0)
            {
                res.status(404).send('User not found');
                return;
            }
            // Content and user exist, proceed with like update
            connection.query(
                'UPDATE likes SET liked_content = ?, liked_by = ?, date = ? WHERE like_id = ?',
                [liked_content, liked_by, date, likeId],
                (error, result) => {
                    if (error)
                    {
                        console.error('Error updating like:', error);
                        res.status(500).send('Internal Server Error');
                        return;
                    }
                    res.json(result);
                }
            );
        });
    });
};

// Delete like by ID
exports.deleteLike = (req, res) => {
    const likeId = req.params.id;
    connection.query('DELETE FROM likes WHERE like_id = ?', [likeId], (error, result) => {
        if (error)
        {
            console.error('Error deleting like:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
};
