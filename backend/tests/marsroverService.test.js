const axios = require('axios');
const { fetchMarsRoverPhotosBySol, fetchMarsRoverPhotosByDate } = require('../services/marsRoverService');

jest.mock('axios');

describe('Mars Rover Service', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('fetchMarsRoverPhotosBySol', () => {
    it('should fetch photos for a given sol', async () => {
      const mockPhotos = [{ id: 1, rover: { name: 'Curiosity' }, img_src: 'http://test.com/photo.jpg' }];
      
      // Set up mock resolved value for the axios get request
      axios.get.mockResolvedValueOnce({ data: { photos: mockPhotos } });

      const sol = 1000;
      const result = await fetchMarsRoverPhotosBySol(sol);

      // Expectations
      expect(result).toEqual(mockPhotos);  // Should return the mocked photos
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        {
          params: {
            sol,
            api_key: expect.any(String),
            page: 1,
            per_page: 10
          }
        }
      );
    });

    it('should throw an error if the API request fails', async () => {
      axios.get.mockRejectedValueOnce(new Error('API Error'));

      const sol = 1000;
      await expect(fetchMarsRoverPhotosBySol(sol)).rejects.toThrow('Error fetching Mars Rover Photos by Sol');
    });
  });

  describe('fetchMarsRoverPhotosByDate', () => {
    it('should fetch photos for a given Earth date', async () => {
      const mockPhotos = [{ id: 2, rover: { name: 'Opportunity' }, img_src: 'http://test.com/photo2.jpg' }];

      axios.get.mockResolvedValueOnce({ data: { photos: mockPhotos } });

      const earthDate = '2021-06-23';
      const result = await fetchMarsRoverPhotosByDate(earthDate);

      expect(result).toEqual(mockPhotos);  // Should return the mocked photos
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        {
          params: {
            earth_date: earthDate,
            api_key: expect.any(String),
            page: 1,
            per_page: 10
          }
        }
      );
    });

    it('should throw an error if the API request fails', async () => {
      axios.get.mockRejectedValueOnce(new Error('API Error'));

      const earthDate = '2021-06-23';
      await expect(fetchMarsRoverPhotosByDate(earthDate)).rejects.toThrow('Error fetching Mars Rover Photos by Earth Date');
    });
  });
});


