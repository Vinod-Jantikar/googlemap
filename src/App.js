
import './App.css';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useState, useEffect } from 'react';
// import { HotelComponent } from './components/Hotels.jsx';


const MapContainer = ({ google }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3005/Hotels")
      .then((d) => d.json())
      .then((data) => setHotels(data));
  }, []);

  console.log(hotels)

  return (
    <>
      <Map google={google} style={{ width: "100%", height: "100%" }} zoom={10} initialCenter={{

        lat: 17.914881,
        lng: 77.504608
      }
      }>

        {hotels.map((e) => (
          <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'Bidar'}
          position={{ lat: 17.914881, lng: 77.504608 }} />
        ))}

        
      </Map>

    </>
  )
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBJh9MuLEy8VyFrXWQSS9IZiEEkW7Z5SRc"
})(MapContainer)
