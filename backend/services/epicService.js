const axios = require('axios');

const NASA_API_KEY = process.env.NASA_API_KEY || 'YOUR_API_KEY_HERE';

exports.fetchEpicImages = async (page, limit) => {
  const response = await axios.get(
    `https://api.nasa.gov/EPIC/api/natural/images`,
    {
      params: {
        api_key: NASA_API_KEY,
        page,
        limit
      },
    }
  );
  return response.data; // Adjust this based on the structure of the response
};
