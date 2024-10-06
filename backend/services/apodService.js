const axios = require('axios');
// NASA API Key (https://api.nasa.gov/)
const NASA_API_KEY = process.env.NASA_API_KEY;

/**
 * Fetch APOD data from NASA
 */
const fetchApodData = async () => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching APOD data from NASA');
    }
};

module.exports = {
    fetchApodData,
};
