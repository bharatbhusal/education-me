// reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewControllers = require('./reviewControllers');

// Create a new review
router.post('/', reviewControllers.createReview);

// Get all reviews
router.get('/', reviewControllers.getAllReviews);

// Get review by ID
router.get('/:id', reviewControllers.getReviewById);

// Update review by ID
router.put('/:id', reviewControllers.updateReview);

// Delete review by ID
router.delete('/:id', reviewControllers.deleteReview);

module.exports = router;
