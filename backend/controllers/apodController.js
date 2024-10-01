const nasaService = require('../services/apodService.js');

/**
 * Controller for fetching APOD data from NASA
 */
const getApod = async (req, res) => {
    try {
        const apodData = await nasaService.fetchApodData();
        res.json(apodData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getApod,
};
