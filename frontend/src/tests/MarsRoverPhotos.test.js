import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MarsRoverPhotos from '../componants/views/MarsRoverPhotos';

// Mock the axios instance used in the service
const mock = new MockAdapter(axios);

describe('MarsRoverPhotos Component', () => {
  afterEach(() => {
    mock.reset();
  });

  test('fetches and displays Mars Rover photos', async () => {
    const mockPhotos = [
      {
        id: 1,
        img_src: 'http://example.com/photo1.jpg',
        rover: { name: 'Curiosity' },
        camera: { full_name: 'Front Camera' },
        earth_date: '2021-12-01',
      },
    ];

    // Mock the API response
    mock.onGet('/api/mars-rover-photos').reply(200, mockPhotos);

    render(<MarsRoverPhotos />);

    // Trigger a photo fetch by simulating a user input (e.g., selecting a Sol or Earth date)
    const solInput = screen.getByPlaceholderText('e.g., 1000');
    fireEvent.change(solInput, { target: { value: '1000' } });

    await waitFor(() => expect(screen.getByAltText('Mars Rover')).toBeInTheDocument());

    expect(screen.getByAltText('Mars Rover')).toHaveAttribute('src', 'http://example.com/photo1.jpg');
  });

  test('handles API error', async () => {
    mock.onGet('/api/mars-rover-photos').reply(500);

    render(<MarsRoverPhotos />);

    // Trigger a photo fetch
    const solInput = screen.getByPlaceholderText('e.g., 1000');
    fireEvent.change(solInput, { target: { value: '1000' } });

    await waitFor(() => expect(screen.getByText('Error:')).toBeInTheDocument());
  });
});
