import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Apod from '../componants/views/Apod'; // Assuming your APOD component is named Apod

// Mock axios
const mock = new MockAdapter(axios);

describe('APOD Component', () => {
  afterEach(() => {
    mock.reset(); // Reset the mock adapter after each test
  });

  test('fetches and displays APOD data', async () => {
    const mockApodData = {
      url: 'https://apod.nasa.gov/apod/image/2001/OrionNebula_Hubble_960.jpg',
      title: 'Orion Nebula',
      explanation: 'This is a beautiful image of the Orion Nebula captured by Hubble.',
      date: '2023-10-01',
    };

    // Mock the API response
    mock.onGet('/api/apod').reply(200, mockApodData);

    render(<Apod />);

    // Wait for the data to be fetched and rendered
    await waitFor(() => expect(screen.getByAltText('Astronomy Picture of the Day')).toBeInTheDocument());

    // Assert that the APOD image is displayed
    expect(screen.getByAltText('Astronomy Picture of the Day')).toHaveAttribute('src', mockApodData.url);

    // Assert that the title and explanation are rendered correctly
    expect(screen.getByText(mockApodData.title)).toBeInTheDocument();
    expect(screen.getByText(mockApodData.explanation)).toBeInTheDocument();
  });

  test('handles API error', async () => {
    // Mock an API error
    mock.onGet('/api/apod').reply(500);

    render(<Apod />);

    // Wait for the error message to be displayed
    await waitFor(() => expect(screen.getByText(/Error:/)).toBeInTheDocument());
  });

  test('displays loading state', () => {
    // Since the API call is asynchronous, there will be a loading state before it finishes
    render(<Apod />);

    // Check for the loading text
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});


