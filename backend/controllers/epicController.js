const epicService = require('../services/epicService');

exports.getEpicImages = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Pagination parameters
  try {
    const images = await epicService.fetchEpicImages(page, limit);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
