import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Apod from './components/views/Apod';  // Import the APOD component
import MarsRoverPhotos from './components/views/MarsRoverPhotos';  // Import the Mars Rover component
import EpicImages from './components/views/EpicImages'; // Import the EPIC component

function App() {
  const [currentView, setCurrentView] = useState('apod'); // State to track the current view
  const [showIntro, setShowIntro] = useState(true); // State to control GIF visibility

  // Hide the GIF after a set time or when the GIF ends
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false); // Hide GIF after 3 seconds (adjust as needed)
    }, 3000); // Set duration to your GIF length

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showIntro ? (
        <div className="gif-container">
          {/* Update the image path to start with '/' */}
          <img src="/Universe-Expansion-Artists-Concept.webp" alt="Intro" /> 
        </div>
      ) : (
        <>
          <nav className="nav-buttons">
            <button className="nav-button apod-button" onClick={() => setCurrentView('apod')}>
              {/* Use absolute paths starting with '/' */}
              <img src="/pod.png" alt="APOD Icon" className="icon" /> {/* APOD Vortex Icon */}
              <span>APOD</span>
            </button>
            <button className="nav-button mars-button" onClick={() => setCurrentView('mars')}>
              <img src="/mars.png" alt="Mars Rover Icon" className="icon" /> {/* Mars Rover Icon */}
              <span>Mars Rover Photos</span>
            </button>
            <button className="nav-button epic-button" onClick={() => setCurrentView('epic')}>
              <img src="/epic.png" alt="EPIC Icon" className="icon" /> {/* EPIC Icon */}
              <span>EPIC Images</span>
            </button>
          </nav>
          
          {currentView === 'apod' && <Apod />}
          {currentView === 'mars' && <MarsRoverPhotos />}
          {currentView === 'epic' && <EpicImages />} 
        </>
      )}
    </div>
  );
}

export default App;

