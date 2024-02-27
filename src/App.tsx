import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position);
      },
      (error) => {
        console.error('Error getting geolocation:', error.message);
      }
    );
  }, []);

  return (
    <div>
      <h1>Geolocation PWA 예제</h1>
      {position && (
        <div>
          <p>Latitude: {position.coords.latitude}</p>
          <p>Longitude: {position.coords.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default App;
