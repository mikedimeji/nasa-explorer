const axios = require('axios');
const apodService = require('../services/apodService');

// Mock axios
jest.mock('axios');

describe('NASA APOD Service', () => {
  it('should fetch APOD data successfully', async () => {
    // Mock the response data
    const mockApodData = {
      data: {
        title: 'Astronomy Picture of the Day',
        url: 'https://example.com/apod.jpg',
        explanation: 'A beautiful picture of the cosmos.',
        date: '2023-10-01',
      },
    };

    // Tell axios to return the mock data when called
    axios.get.mockResolvedValue(mockApodData);

    // Call the service method
    const result = await apodService.fetchApodData();

    // Assertions
    expect(result).toEqual(mockApodData.data);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('https://api.nasa.gov/planetary/apod'));
  });

  it('should handle errors when fetching APOD data', async () => {
    axios.get.mockRejectedValue(new Error('NASA API error'));

    await expect(apodService.fetchApodData()).rejects.toThrow('Error fetching APOD data from NASA');
  });
});
