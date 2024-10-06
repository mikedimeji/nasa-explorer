const express = require('express');
const router = express.Router();
const epicController = require('../controllers/epicController'); 

router.get('/epic-images', epicController.getEpicImages);

module.exports = router;
