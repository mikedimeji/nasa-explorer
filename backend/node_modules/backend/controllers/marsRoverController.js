const marsRoverService = require('../services/marsRoverService');

exports.getMarsRoverPhotos = async (req, res) => {
  const { sol, earth_date, rover, page, limit } = req.query;
  
  try {
    let photos;
    if (sol) {
      photos = await marsRoverService.fetchMarsRoverPhotosBySol(sol, rover, page, limit);
    } else if (earth_date) {
      photos = await marsRoverService.fetchMarsRoverPhotosByDate(earth_date, rover, page, limit);
    } else {
      return res.status(400).json({ error: 'Either sol or earth_date is required' });
    }
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Mars Rover Photos' });
  }
};




