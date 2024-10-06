import React, { useState, useEffect } from 'react';
import '../../styles/epicImages.css'; // Create this file for styling

const EpicImages = () => {
  const [epicImage, setEpicImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpicImage = async () => {
      try {
        const response = await fetch('/api/epic'); // Replace with your API endpoint
        const data = await response.json();
        
        // Assuming the API returns an array and we want the first image
        if (data.length > 0) {
          setEpicImage(data[0]);
        }
      } catch (error) {
        console.error('Error fetching EPIC image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpicImage();
  }, []);

  return (
    <div className="epic-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        epicImage && (
          <div className="epic-photo-card">
            <h2 className="epic-header">{epicImage.title || "EPIC Image"}</h2>
            <img src={`https://epic.gsfc.nasa.gov/archive/natural/${epicImage.date.substring(0, 4)}/${epicImage.date.substring(5, 7)}/${epicImage.date.substring(8, 10)}/jpg/${epicImage.image}.jpg`} alt={epicImage.title || "EPIC Image"} />
            <p className="epic-explanation">{epicImage.explanation || "No explanation available."}</p>
          </div>
        )
      )}
    </div>
  );
};

export default EpicImages;


