// reviewControllers.js

const connection = require('../config/connectDB');

// Create a new review
exports.createReview = (req, res) => {
    const { user_id, description, date, rating } = req.body;
    connection.query(
        'INSERT INTO reviews (user_id, description, date, rating) VALUES (?, ?, ?, ?)',
        [user_id, description, date, rating],
        (error, result) => {
            if (error)
            {
                console.error('Error creating review:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(result);
        }
    );
};

// Get all reviews
exports.getAllReviews = (req, res) => {
    connection.query('SELECT * FROM reviews', (error, results) => {
        if (error)
        {
            console.error('Error getting reviews:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
};

// Get review by ID
exports.getReviewById = (req, res) => {
    const reviewId = req.params.id;
    connection.query('SELECT * FROM reviews WHERE review_id = ?', [reviewId], (error, results) => {
        if (error)
        {
            console.error('Error getting review:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Review not found');
            return;
        }
        res.json(results[0]);
    });
};

// Update review by ID
exports.updateReview = (req, res) => {
    const reviewId = req.params.id;
    const { user_id, description, date, rating } = req.body;
    connection.query(
        'UPDATE reviews SET user_id = ?, description = ?, date = ?, rating = ? WHERE review_id = ?',
        [user_id, description, date, rating, reviewId],
        (error, result) => {
            if (error)
            {
                console.error('Error updating review:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(result);
        }
    );
};

// Delete review by ID
exports.deleteReview = (req, res) => {
    const reviewId = req.params.id;
    connection.query('DELETE FROM reviews WHERE review_id = ?', [reviewId], (error, result) => {
        if (error)
        {
            console.error('Error deleting review:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
};
