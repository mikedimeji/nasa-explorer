import React, { useState, useEffect } from 'react';
import '../../styles/epicImages.css'; // Ensure this file exists for styling

const EpicImages = () => {
  const [epicImage, setEpicImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Define the fetch function outside of useEffect
  const fetchEpicImage = async () => {
    try {
      const response = await fetch('/api/epic'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Assuming the API returns an array and we want the first image
      if (data.length > 0) {
        setEpicImage(data[0]);
      } else {
        setErrorMessage('No epic images found.');
      }
    } catch (error) {
      console.error('Error fetching EPIC image:', error);
      setErrorMessage('Error fetching EPIC image.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpicImage(); // Call the fetch function inside useEffect
  }, []); // No dependencies to add

  return (
    <div className="epic-container">
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        epicImage && (
          <div className="epic-photo-card">
            <h2 className="epic-header">{epicImage.title || "EPIC Image"}</h2>
            <img 
              src={`https://epic.gsfc.nasa.gov/archive/natural/${epicImage.date.substring(0, 4)}/${epicImage.date.substring(5, 7)}/${epicImage.date.substring(8, 10)}/jpg/${epicImage.image}.jpg`} 
              alt={epicImage.title || "EPIC Image"} 
            />
            <p className="epic-explanation">{epicImage.explanation || "No explanation available."}</p>
          </div>
        )
      )}
      <p style={{ color: 'red', fontWeight: 'bold' }}>IN DEVELOPMENT</p>
    </div>
  );
};

export default EpicImages;




