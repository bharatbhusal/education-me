// commentControllers.js

const connection = require('../config/connectDB');

// Create a new comment
exports.createComment = (req, res) => {
    const { commented_content, commented_by, date } = req.body;
    // Check if the content and user exist
    connection.query('SELECT * FROM content WHERE content_id = ?', [commented_content], (error, contentResults) => {
        if (error)
        {
            console.error('Error creating comment:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (contentResults.length === 0)
        {
            res.status(404).send('Content not found');
            return;
        }
        connection.query('SELECT * FROM users WHERE user_id = ?', [commented_by], (error, userResults) => {
            if (error)
            {
                console.error('Error creating comment:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            if (userResults.length === 0)
            {
                res.status(404).send('User not found');
                return;
            }
            // Content and user exist, proceed with comment creation
            connection.query(
                'INSERT INTO comments (commented_content, commented_by, date) VALUES (?, ?, ?)',
                [commented_content, commented_by, date],
                (error, result) => {
                    if (error)
                    {
                        console.error('Error creating comment:', error);
                        res.status(500).send('Internal Server Error');
                        return;
                    }
                    res.json(result);
                }
            );
        });
    });
};

// Get all comments
exports.getAllComments = (req, res) => {
    connection.query('SELECT * FROM comments', (error, results) => {
        if (error)
        {
            console.error('Error getting comments:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
};

// Get comment by ID
exports.getCommentById = (req, res) => {
    const commentId = req.params.id;
    connection.query('SELECT * FROM comments WHERE comment_id = ?', [commentId], (error, results) => {
        if (error)
        {
            console.error('Error getting comment:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Comment not found');
            return;
        }
        res.json(results[0]);
    });
};

// Update comment by ID
exports.updateComment = (req, res) => {
    const commentId = req.params.id;
    const { commented_content, commented_by, date } = req.body;
    // Check if the content and user exist
    connection.query('SELECT * FROM content WHERE content_id = ?', [commented_content], (error, contentResults) => {
        if (error)
        {
            console.error('Error updating comment:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (contentResults.length === 0)
        {
            res.status(404).send('Content not found');
            return;
        }
        connection.query('SELECT * FROM users WHERE user_id = ?', [commented_by], (error, userResults) => {
            if (error)
            {
                console.error('Error updating comment:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            if (userResults.length === 0)
            {
                res.status(404).send('User not found');
                return;
            }
            // Content and user exist, proceed with comment update
            connection.query(
                'UPDATE comments SET commented_content = ?, commented_by = ?, date = ? WHERE comment_id = ?',
                [commented_content, commented_by, date, commentId],
                (error, result) => {
                    if (error)
                    {
                        console.error('Error updating comment:', error);
                        res.status(500).send('Internal Server Error');
                        return;
                    }
                    res.json(result);
                }
            );
        });
    });
};

// Delete comment by ID
exports.deleteComment = (req, res) => {
    const commentId = req.params.id;
    connection.query('DELETE FROM comments WHERE comment_id = ?', [commentId], (error, result) => {
        if (error)
        {
            console.error('Error deleting comment:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
};
