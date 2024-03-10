// courseRoutes.js

const express = require('express');
const router = express.Router();
const courseControllers = require('../controllers/coursesControllers');

// Create a new course
router.post('/', courseControllers.createCourse);

// Get all courses
router.get('/', courseControllers.getAllCourses);

// Get course by ID
router.get('/:id', courseControllers.getCourseById);

// Update course by ID
router.put('/:id', courseControllers.updateCourse);

// Delete course by ID
router.delete('/:id', courseControllers.deleteCourse);

module.exports = router;
