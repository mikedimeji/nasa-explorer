// epicService.js
const axios = require('axios');

const NASA_API_KEY = process.env.NASA_API_KEY || 'YOUR_API_KEY_HERE';

exports.fetchEpicImages = async (limit) => {
  const response = await axios.get(
    `https://api.nasa.gov/EPIC/api/natural/images`,
    {
      params: {
        api_key: NASA_API_KEY,
        limit // Limit the number of images returned
      },
    }
  );
  return response.data; 
};

