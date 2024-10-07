require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = require('./app');
const port = process.env.PORT || 10000;

// CORS configuration
const corsOptions = {
  origin: '*', 
  methods: ["GET", "POST"],
  credentials: false,
  allowedHeaders: ["Content-Type", "Authorization"]
};


// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON requests

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

