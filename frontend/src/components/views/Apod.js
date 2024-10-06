import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/apod.css';

const Apod = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        // Determine API URL based on environment
        const API_URL =
          process.env.NODE_ENV === 'production'
            ? `${process.env.REACT_APP_BACKEND_URL}/api/apod` // Backend URL from Render
            : '/api/apod'; // Local development URL

        const response = await axios.get(API_URL);
        setApod(response.data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  return (
    <div className="apod-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        apod && (
          <div>
            <h1 className="apod-title">NASA PICTURE OF THE DAY</h1>
            <div className="apod-photo-card">
              <h2 className="apod-header">{apod.title}</h2>
              <img src={apod.url} alt={apod.title} />
              <div className="apod-overlay">
                <p>{apod.explanation}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Apod;









