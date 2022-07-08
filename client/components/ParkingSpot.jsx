import React, { useState } from "react";
import topoBackground from "../assets/topoBackground.png";
import { Link } from "react-router-dom";
// import ReactCardFlip from "react-card-flip";
// import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const ParkingSpot = ({ address }) => {
  // const { address } = info;

  return (
    <div className="parkingSpotTile">
      {/* <img className="tileTopo" src={topoBackground} width="100%"></img> */}
      <h1 className="spotAddress">{address}</h1>
    </div>
  );
};

export default ParkingSpot;
