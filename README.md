# Nasa Explorer

This project is a full-stack application that fetches Mars Rover photos using NASA's API. The frontend is built with React, while the backend uses Node.js and Express for serving API requests. The app allows users to browse photos taken by NASA's Mars rovers for different Martian days (Sols).

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

## Features

- Browse photos taken by NASA's Curiosity Rover.
- Select Martian days (Sols) using a slider to view photos from different days.
- Responsive design for both mobile and desktop views.
- Backend fetches data from NASA’s Mars Rover API and serves it to the frontend.
- Error handling and loading states implemented for a smooth user experience.
- APOD (Astronomy Picture of the Day) component to showcase daily images from NASA.

## Architecture

This project follows a modern modular architecture, ensuring separation of concerns and scalability. The application consists of two main parts:

### Frontend (React)

- Components are organized into reusable pieces.
- Services handle all API requests, abstracting away external calls.
- Hooks can be added for state and side-effect management.
- Styles are maintained separately for easy customization.

### Backend (Node.js/Express)

- Controllers manage API requests, sending responses to the frontend.
- Services handle the business logic (e.g., fetching Mars Rover photos from NASA’s API).
- Routes define the API endpoints used by the frontend.

## Tech Stack

**Frontend:**
- React.js - Library for building user interfaces.
- rc-slider - Library for adding the Sol slider.
- Jest & React Testing Library - For unit and integration testing.

**Backend:**
- Node.js & Express - Backend framework to handle API requests.
- Axios - For making HTTP requests to NASA's API.
- Jest - For unit testing backend services.

## Prerequisites

Before running this application, make sure you have:

- Node.js (>=14.x) and npm installed.
- NASA API Key for accessing the Mars Rover API. Get it [here](https://api.nasa.gov/).

## Environment Variables

The project requires a few environment variables to be set up in both the frontend and backend. Create a `.env` file in the root directories of both the frontend and backend.

## installation
git clone https://github.com/mikedimeji/nasa-explorer.git
cd nasa-explorer

cd frontend
npm install

cd backend
npm install

## Running the Application

# Start the Backend
cd backend
node server.js

# Start the Frontend
cd frontend
npm start

## Running Tests
cd frontend
npm test

cd backend
npm test

## Project Structure
/nasa-explorer
├── /frontend              # React frontend
│   ├── /src
│   │   ├── /components    # React components
│   │   ├── /services      # API call to the backend
│   │   ├── /tests         # Frontend tests
│   │   └── /styles        # Global styles
│   ├── App.js             # Main entry React component
│   └── index.js           # ReactDOM entry point
└── /backend               # Node.js/Express backend
    ├── /src
    │   ├── /controllers   # API route handlers
    │   ├── /routes        # API route definitions
    │   ├── /services      # Business logic (e.g., NASA API request)
    │   ├── /middleware     # Express middleware
    │   ├── /tests         # Backend tests
    ├── app.js         # Main Express app
    └── server.js


  