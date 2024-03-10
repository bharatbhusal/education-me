// courseControllers.js

const connection = require('../config/connectDB');

// Create a new course
exports.createCourse = (req, res) => {
    const { title, description, instructor, date } = req.body;
    connection.query(
        'INSERT INTO courses (title, description, instructor, date) VALUES (?, ?, ?, ?)',
        [title, description, instructor, date],
        (error, result) => {
            if (error)
            {
                console.error('Error creating course:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(result);
        }
    );
};

// Get all courses
exports.getAllCourses = (req, res) => {
    connection.query('SELECT * FROM courses', (error, results) => {
        if (error)
        {
            console.error('Error getting courses:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
};

// Get course by ID
exports.getCourseById = (req, res) => {
    const courseId = req.params.id;
    connection.query('SELECT * FROM courses WHERE course_id = ?', [courseId], (error, results) => {
        if (error)
        {
            console.error('Error getting course:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0)
        {
            res.status(404).send('Course not found');
            return;
        }
        res.json(results[0]);
    });
};

// Update course by ID
exports.updateCourse = (req, res) => {
    const courseId = req.params.id;
    const { title, description, instructor, date } = req.body;
    connection.query(
        'UPDATE courses SET title = ?, description = ?, instructor = ?, date = ? WHERE course_id = ?',
        [title, description, instructor, date, courseId],
        (error, result) => {
            if (error)
            {
                console.error('Error updating course:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(result);
        }
    );
};

// Delete course by ID
exports.deleteCourse = (req, res) => {
    const courseId = req.params.id;
    connection.query('DELETE FROM courses WHERE course_id = ?', [courseId], (error, result) => {
        if (error)
        {
            console.error('Error deleting course:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
};
