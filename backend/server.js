require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = require('./app');
const port = process.env.PORT || 10000;

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  credentials: true
};

// Middleware
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON requests

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

