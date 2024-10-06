import React, { useState, useEffect } from 'react';
import '../../styles/epicImages.css'; 

const EpicImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Number of images per load

  const fetchEpicImages = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await fetch(`/api/epic-images?limit=${limit}`);
      if (!response.ok) {
        const errorMessage = await response.text(); // Get response text for debugging
        throw new Error(`Error: ${response.status} - ${errorMessage}`);
      }
      const data = await response.json();
      console.log('Fetched EPIC Images:', data); // Log the data to verify the structure
      setImages((prevImages) => [...prevImages, ...data]); // Append new images
    } catch (error) {
      console.error('Error fetching EPIC images:', error);
      setError(error.message); // Set error state
    }
    setLoading(false);
  };
  

  useEffect(() => {
    fetchEpicImages();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1); // Increment page for pagination
  };

  return (
    <div className="epic-images-container">
      <h2>Earth Polychromatic Imaging Camera (EPIC) Images</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error message */}
      {!loading && !error && images.length === 0 && <p>No images available.</p>}
      {!loading && !error && images.length > 0 && (
        <div className="epic-images-grid">
          {images.map((image) => (
            <div key={image.image} className="epic-image-card">
              <img
                src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 10).replace(/-/g, '/')}/png/${image.image}.png`}
                alt={`EPIC ${image.image}`}
              />
              <div className="epic-image-description">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleLoadMore}>Load More Images</button>
    </div>
  );
};

export default EpicImages;

