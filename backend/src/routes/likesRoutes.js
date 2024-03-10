// likeRoutes.js

const express = require('express');
const router = express.Router();
const likeControllers = require('../controllers/likesControllers');

// Create a new like
router.post('/', likeControllers.createLike);

// Get all likes
router.get('/', likeControllers.getAllLikes);

// Get like by ID
router.get('/:id', likeControllers.getLikeById);

// Update like by ID
router.put('/:id', likeControllers.updateLike);

// Delete like by ID
router.delete('/:id', likeControllers.deleteLike);

module.exports = router;
