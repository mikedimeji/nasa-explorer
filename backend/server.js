require('dotenv').config(); 
const cors = require('cors');
const express = require('express');
const app = require('./app'); // Import your app which contains the routes
const port = process.env.PORT || 10000;

// CORS configuration
const corsOptions = {
  origin: '*', // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Include all HTTP methods your API uses
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Middleware
app.use(cors(corsOptions)); // CORS should come first
app.use(express.json()); // Middleware to parse JSON requests

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


