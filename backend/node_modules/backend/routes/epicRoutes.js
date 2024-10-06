const express = require('express');
const router = express.Router();
const epicController = require('../controllers/epicController'); 

// Define the route to get EPIC images
router.get('/epic-images', epicController.getEpicImages);

module.exports = router;
