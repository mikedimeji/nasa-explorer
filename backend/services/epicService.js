const axios = require('axios');

const NASA_API_KEY = process.env.NASA_API_KEY;

exports.fetchEpicImages = async (limit) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/EPIC/api/natural/images`,
      {
        params: {
          api_key: NASA_API_KEY,
          limit
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request data:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    throw new Error(`Error fetching EPIC images: ${error.message}`);
  }
};


