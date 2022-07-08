import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { mapStyles } from "../assets/mapsStyles";

const containerStyle = {
  width: "100%",
  height: "100%",
  float: "left",
};

const center = {
  lat: 34.024212,
  lng: -118.496475,
};

const options = {
  styles: mapStyles,
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedSpots: false,
      spots: [],
    };
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

  render() {
    const { spots } = this.state;

    // const markerElems = spots.map((spots, i) => {
    //     const center = {
    //         lat: spots.lat,
    //         lng: spots.lng,
    //       };

    //   return <Marker key={i} position={center} />;
    // });

    return (
      <LoadScript googleMapsApiKey="AIzaSyBnmB6jh_VAGjxJwUBAep3545qwW_g-62Y">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={options}
        >
          {/* {markerElems} */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
