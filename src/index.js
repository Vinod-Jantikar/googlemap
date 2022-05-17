import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapContainer from './App.js';

import { HotelComponent } from './components/Hotels.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MapContainer />  
    {/* <HotelComponent /> */}
  </React.StrictMode>
);
