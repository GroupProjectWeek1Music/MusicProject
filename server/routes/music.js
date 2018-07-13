const express = require ('express');
const router = express.Router();
const musicController = require('../controllers/music');

router
    .get('/search/artist', musicController.searchArtist)
    .get('/search/track', musicController.searchTrack)
    .get('/playlist/tracks', musicController.getTracks)

module.exports = router