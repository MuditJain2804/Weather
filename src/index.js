import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AltitudeContextProvider from './context/AltitudeContext';
import WeatherContextProvider from './context/WeatherContext';
import LocationContextProvider from './context/LocationContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LocationContextProvider>
    <AltitudeContextProvider>
      <WeatherContextProvider>
        <App />
     </WeatherContextProvider>
    </AltitudeContextProvider>
  </LocationContextProvider>
  </BrowserRouter>
  
    
);

