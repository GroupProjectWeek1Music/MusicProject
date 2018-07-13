const express = require ('express');
const router = express.Router();
const musicController = require('../controllers/music');

router
    .get('/search/artist', musicController.searchArtist)
    .get('/search/song', musicController.searchSong)

module.exports = router