import React, { useState, useEffect } from 'react';
import { getMarsRoverPhotos } from '../../services/nasaService';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';  // Import carousel CSS
import '../../styles/marsRoverPhotos.css';

const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);  // Default to false initially
  const [sol, setSol] = useState('');  // Use empty string to avoid conflicts
  const [earthDate, setEarthDate] = useState('');  // Earth Date state
  const [rover, setRover] = useState('curiosity');  // Rover selection
  const [page, setPage] = useState(1);  // Pagination
  const [limit] = useState(10);  // Limit per page

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const data = await getMarsRoverPhotos({
        sol: earthDate === '' && sol !== '' ? sol : null,  // Use Sol if Earth Date isn't provided
        earth_date: earthDate !== '' ? earthDate : null,  // Use Earth Date if provided
        rover,
        page,
        limit
      });
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);  // Append new photos
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (sol || earthDate) {
      fetchPhotos();
    }
  }, [sol, earthDate, rover, page]);

  // Reset Sol and Photos when Earth Date changes
  const handleSolChange = (e) => {
    setSol(e.target.value);
    setEarthDate('');  // Reset Earth Date when Sol changes
    setPhotos([]);  // Clear the photos list
    setPage(1);  // Reset pagination
  };

  // Reset Earth Date and Photos when Sol changes
  const handleEarthDateChange = (e) => {
    setEarthDate(e.target.value);
    setSol('');  // Reset Sol when Earth Date changes
    setPhotos([]);  // Clear the photos list
    setPage(1);  // Reset pagination
  };

  const handleRoverChange = (e) => {
    setRover(e.target.value);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);  // Increment the page number
  };

  const handleResetFilters = () => {
    // Reset both Sol and Earth Date
    setSol('');
    setEarthDate('');
    setPhotos([]);
    setPage(1);
  };

  return (
    <div className="mars-rover-photos">
      <h1>Mars Rover Photos</h1>

      {/* Sol input */}
      <div className="input-container">
        <label>Sol (Martian Day):</label>
        <input
          type="number"
          value={sol}
          onChange={handleSolChange}
          disabled={earthDate !== ''}  // Disable Sol input if Earth Date is selected
          placeholder="e.g., 1000"
        />
      </div>
      
      {/* Earth Date input */}
      <div className="input-container">
        <label>Earth Date:</label>
        <input
          type="date"
          value={earthDate}
          onChange={handleEarthDateChange}
          disabled={sol !== ''}  // Disable Earth Date input if Sol is selected
        />
      </div>
      
      {/* Rover selection dropdown */}
      <div className="input-container">
        <label>Select Rover:</label>
        <select value={rover} onChange={handleRoverChange}>
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
      </div>

      {/* Reset filters button */}
      <button onClick={handleResetFilters} className="reset-filters-button">
        Reset Filters
      </button>

      {(!sol && !earthDate) ? (  // Check if neither Sol nor Earth Date is selected
        <p>Please choose a Sol (Martian Day) or an Earth Date to load photos.</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {photos.length > 0 ? (
            <div className="carousel-container">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay={false}
                dynamicHeight={true}
              >
                {photos.map((photo) => (
                  <div key={photo.id}>
                    <img src={photo.img_src} alt="Mars Rover" />
                    <p className="legend">
                      Rover: {photo.rover.name} | Camera: {photo.camera.full_name} | Date: {photo.earth_date}
                    </p>
                  </div>
                ))}
              </Carousel>
              <button onClick={handleLoadMore} className="load-more-button">Load More Photos</button>
            </div>
          ) : (
            <p>No photos available for the selected date or sol.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MarsRoverPhotos;
