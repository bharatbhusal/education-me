// commentRoutes.js

const express = require('express');
const router = express.Router();
const commentControllers = require('../controllers/commentsControllers');

// Create a new comment
router.post('/', commentControllers.createComment);

// Get all comments
router.get('/', commentControllers.getAllComments);

// Get comment by ID
router.get('/:id', commentControllers.getCommentById);

// Update comment by ID
router.put('/:id', commentControllers.updateComment);

// Delete comment by ID
router.delete('/:id', commentControllers.deleteComment);

module.exports = router;
