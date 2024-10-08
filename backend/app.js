require('dotenv').config(); 
const express = require('express');
const marsRoverRoutes = require('./routes/marsRoverRoutes');
const epicRoutes = require('./routes/epicRoutes'); // Import the epic routes

const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', marsRoverRoutes); // Mars Rover routes
app.use('/api', epicRoutes); // EPIC routes

module.exports = app;



