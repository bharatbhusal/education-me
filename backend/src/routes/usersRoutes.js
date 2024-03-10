// userRoutes.js

const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/usersControllers');

// Create a new user
router.post('/', userControllers.createUser);

// Get all users
router.get('/', userControllers.getAllUsers);
router.post('/login', userControllers.login);

// // Get user by ID
// router.get('/:id', userControllers.getUserById);

// // Update user by ID
// router.put('/:id', userControllers.updateUser);

// // Delete user by ID
// router.delete('/:id', userControllers.deleteUser);

module.exports = router;
