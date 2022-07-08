import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { styled, alpha } from "@mui/material/styles";
import "../styles.scss";
import logo from "../assets/blueParq.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@mui/material/TextField";
import Maps from "./Map.jsx";
import ParkingSpot from "./ParkingSpot.jsx"
import { useEffect, useState } from "react";


export default function Dashboard() {

  const useStyles = makeStyles(() => ({
    textField: {
      width: "98%",
      height: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      borderRadius: 0,
    },
    overrides: {
      border: 0,
      borderRadius: 20
    },
    input: {
      color: "white"
    }
  }));

  const classes = useStyles();


  const [address, setAddress] = useState("");
  const [data, setData] = useState({
    lat:  34.052235,
    lng: -118.243683,
    listings: []
  });

  //   const handleSubmit = (e) => {
  //     console.log(e);
  //     setAddress(e);

  //     // axios
  //     // .post("http://localhost:3000/api/all", {
  //     //   address: address,
  //     // })
  //     // .then((res) => {
  //     //   // console.log(res.results);
  //     // })
  //     // .catch((err) => {
  //     //   console.log(`Error occured in useEffect: ${err}`);
  //     // });
  //   // console.log("location submission successful");
  // };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(address);
    axios
      .post("http://localhost:3000/api/all", {
        address: address,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(`Error occured in useEffect: ${err}`);
      });
  };

  const props = {
    data: data,
  };

  // useEffect((e) => {
  //   setAddress();
  //   setData();
  // }, []);

  const listings = data.listings;
  
const spotElems = listings.map((listings, i) => {
    return <ParkingSpot address={listings.address} />;
});


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="navBar" style={{ height: "70px" }} sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                book
              </Typography>
            </Button>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                host
              </Typography>
            </Button>
            <Link to='/'>
            <Button>
              <img className="websiteLogo" src={logo} />
            </Button>
            </Link>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                about
              </Typography>
            </Button>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                sign in
              </Typography>
            </Button>
          </Toolbar>
        </Box>
      </div>
      <div
        className="filterBar"
        style={{ height: "40px" }}
        sx={{ flexGrow: 1 }}
      >
        <div
          className="leftFilter"
          style={{ width: "30%", float: "left", marginLeft: "10px" }}
        >
          <form onSubmit={handleChange}>
            <TextField 
              id="standard-search"
              variant="outlined"
              label="city, state, zip code"
              className={classes.textField}
              value={address}
              size="small"
              onChange={(e) => setAddress(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#B9D8D8" }}/>
                  </InputAdornment>
                 )
                }}
            >
              </TextField>
          </form>
        </div>

        <div className="rightFilter" style={{ width: "60%", float: "right" }}>
          <Button className="filterPrice" color="inherit" sx={{ width: 10 }}>
            <Typography
              // variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}
            >
              price
            </Typography>
          </Button>
          <Button className="filterPrice" color="inherit" sx={{ width: 10 }}>
            <Typography
              // variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}
            >
              size
            </Typography>
          </Button>
          <Button className="filterPrice" color="inherit" sx={{ width: 10 }}>
            <Typography
              // variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}
            >
              type
            </Typography>
          </Button>
        </div>
      </div>
      <div className="mapAndTiles" style={{ height: `calc( 100vh - 145px )` }}>
        <div
          className="leftMap"
          style={{ width: "49%", height: "100%", float: "left" }}
        >
          <Maps className="map" {...props} />
        </div>
        <div
          className="rightTiles"
          style={{ width: "50%", height: "100%", float: "right" }}
        >
            {spotElems}
        </div>
      </div>
    </div>
  );
}
