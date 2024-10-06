const epicService = require('../services/epicService');

exports.getEpicImages = async (req, res) => {
  const { limit = 10 } = req.query; // Only use limit for fetching images
  try {
    const images = await epicService.fetchEpicImages(limit);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

