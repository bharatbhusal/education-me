// playlistRoutes.js

const express = require('express');
const router = express.Router();
const playlistControllers = require('../controllers/playlistsControllers');

// Create a new playlist
router.post('/', playlistControllers.createPlaylist);

// Get all playlists
router.get('/', playlistControllers.getAllPlaylists);

// Get playlist by ID
router.get('/:id', playlistControllers.getPlaylistById);

// Update playlist by ID
router.put('/:id', playlistControllers.updatePlaylist);

// Delete playlist by ID
router.delete('/:id', playlistControllers.deletePlaylist);

module.exports = router;
