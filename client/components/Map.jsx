import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// FETCH /api/all 
// fetch('http://localhost:3000/api/all')
// .then(res => res.json() {})
// long and lat

const containerStyle = {
    width: "100%", 
    height: "100%",
    float: "left"
};

const center = {
  lat: 34.024212,
  lng: -118.496475
};

// fetch to /get all

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBnmB6jh_VAGjxJwUBAep3545qwW_g-62Y"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {/* render a marker for each location returned from get all */}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;