const axios = require('axios');
const NASA_API_KEY = process.env.NASA_API_KEY || 'UpVjaaDQiTGaDnFU91bhptKWgIEPltOwkspzVlyY';

exports.fetchMarsRoverPhotosBySol = async (sol, rover = 'curiosity', page = 1, limit = 10) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`, 
      {
        params: {
          sol,
          api_key: NASA_API_KEY,
          page,
          per_page: limit
        }
      }
    );
    return response.data.photos;
  } catch (error) {
    throw new Error('Error fetching Mars Rover Photos by Sol');
  }
};

exports.fetchMarsRoverPhotosByDate = async (earth_date, rover = 'curiosity', page = 1, limit = 10) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
      {
        params: {
          earth_date,
          api_key: NASA_API_KEY,
          page,
          per_page: limit
        }
      }
    );
    return response.data.photos;
  } catch (error) {
    throw new Error('Error fetching Mars Rover Photos by Earth Date');
  }
};






