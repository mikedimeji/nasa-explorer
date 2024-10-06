import React, { useState, useEffect } from 'react';
import '../../styles/apod.css';

const Apod = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/apod')
      .then((response) => response.json())
      .then((data) => {
        setApod(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching APOD:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="apod-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        apod && (
          <div>
            <h1 className="apod-title">NASA PICTURE OF THE DAY</h1> {/* Static Title */}
            <div className="apod-photo-card">
              <h2 className="apod-header">{apod.title}</h2> {/* Title for the image */}
              <img src={apod.url} alt={apod.title} />
              <div className="apod-overlay">
                <p>{apod.explanation}</p> {/* Show explanation on hover */}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Apod;








