import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useJsApiLoader } from '@react-google-maps/api';
import Maps from './Map';

const { GOOGLE_MAPS_API_KEY = 'API_KEY_HERE' } = process.env;

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
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
