const epicService = require('../services/epicService');
const axios = require('axios');

jest.mock('axios');

describe('EPIC Service', () => {
  it('should fetch EPIC images', async () => {
    const mockImages = [{ id: 1, img_src: 'image1.jpg' }, { id: 2, img_src: 'image2.jpg' }];
    axios.get.mockResolvedValue({ data: mockImages });

    const images = await epicService.fetchEpicImages(1, 10);
    expect(images).toEqual(mockImages);
  });

  it('should throw an error if the API request fails', async () => {
    axios.get.mockRejectedValue(new Error('API error'));
    await expect(epicService.fetchEpicImages(1, 10)).rejects.toThrow('API error');
  });
});
