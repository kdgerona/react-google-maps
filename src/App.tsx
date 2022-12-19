import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useJsApiLoader } from '@react-google-maps/api';
import Maps from './Map';

const App = () => {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: 'AIzaSyD_io9984nXGS5Fyldiy79dBeWKSOa8r88',
    googleMapsApiKey: 'AIzaSyAXqOGiz3yFOUvcko1UQS3CEX0U-Kbq3xk',
  });

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <div style={{ height: '100%', width: '100%' }}>
        {isLoaded ? <Maps /> : <h1>Loading Maps...</h1>}
      </div>
    </div>
  );
};

export default App;
