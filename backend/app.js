const express = require('express');
const marsRoverRoutes = require('./routes/marsRoverRoutes');
const axios = require('axios');  // For making HTTP requests
require('dotenv').config(); //for loading NASA API KEY and other env variables
const app = express();


app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', marsRoverRoutes);

module.exports = app;
