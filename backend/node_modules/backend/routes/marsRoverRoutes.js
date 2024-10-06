const express = require('express');
const { getMarsRoverPhotos } = require('../controllers/marsRoverController');
const apodController = require('../controllers/apodController');
const router = express.Router();

router.get('/mars-rover-photos', getMarsRoverPhotos);
router.get('/apod', apodController.getApod);

module.exports = router;
