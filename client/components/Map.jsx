import React, { Component, useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { mapStyles } from "../assets/mapsStyles";
import { dataContext } from "./Dashboard.jsx";

const containerStyle = {
    width: "100%",
    height: "100%",
    float: "left",
  };

//  if (!data) {
//     const center = {
//         lat:  34.052235,
//         lng: -118.243683,
//       }; 
//  }
//  else {
//     const center = {
//         lat: data.lat,
//         lng: data.lng,
//       };
//  }


 const center = {
    lat:  34.052235,
    lng: -118.243683,
  }; 

const options = {
  styles: mapStyles,
};

export default function Map() {
  

//   const { data } = useContext(dataContext);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBnmB6jh_VAGjxJwUBAep3545qwW_g-62Y">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        {/* {markerElems} */}
        <Marker position={center} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}


// fetch to /get all
  //   componentDidMount() {
  //     fetch("http://localhost:3000/api/all")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         // if (!Object.isArray(spots)) spots = [];
  //         // return this.setState({
  //         //   spots,
  //         //   fetchedSpots: true,
  //         // });
  //       })
  //       .catch((err) =>
  //         console.log("Spots.componentDidMount: get spots: ERROR: ", err)
  //       );
  //   }

//   const { spots } = this.state;

  // const markerElems = spots.map((spots, i) => {
  //     const center = {
  //         lat: spots.lat,
  //         lng: spots.lng,
  //       };

  //   return <Marker key={i} position={center} />;
  // });