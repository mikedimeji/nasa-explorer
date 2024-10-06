require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = require('./app');
const port = process.env.PORT || 10000;

// CORS configuration
const corsOptions = {
  origin: ['https://nasa-explorer-1.onrender.com'], // Allowed origin
  methods: 'GET',
  credentials: true,
};

// Middleware
app.use(cors(corsOptions)); // Use CORS options
app.use(express.json()); // Middleware to parse JSON requests

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

