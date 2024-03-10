// server.js

const express = require('express');
const cors = require("cors")

const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoutes')
const commentsRoutes = require('./routes/commentsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const likesRoutes = require('./routes/likesRoutes')
const playlistRoutes = require('./routes/playlistsRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes');
const allowedOrigins = require('./config/allowedOrigins');


const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3031;

app.use(cors(allowedOrigins));


// Routes
app.use('/users', userRoutes);
// app.use('/comments', commentsRoutes);
// app.use('/courses', coursesRoutes);
// app.use('/likes', likesRoutes);
// app.use('/playlists', playlistRoutes);
// app.use('/reviews', reviewsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
