
import axios from 'axios';

const API_URL = '/api/mars-rover-photos';

export const getMarsRoverPhotos = async ({ sol, earth_date, rover, page = 1, limit = 10 }) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        sol,
        earth_date,
        rover,
        page,
        limit
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Mars Rover Photos');
  }
};




