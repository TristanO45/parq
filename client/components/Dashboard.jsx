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
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Maps from "./Map.jsx";
import { useEffect, useState, useContext, createContext } from "react";

export default function Dashboard() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const [address, setAddress] = useState("");
  const [data, setData] = useState({});

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
    // setAddress(e.target.value);
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
    // console.log("location submission successful");
  };

  const dataContext = createContext();

  // useEffect((e) => {
  //   setAddress();
  //   setData();
  // }, []);

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
            <Button>
              <img className="websiteLogo" src={logo} />
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
              required
              id="outlined-required"
              label="city, state, zip code"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </form>
          {/* <Search sx={{ border: ".75px solid #000000" }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#B9D8D8", opacity: "100%" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="city, state, or zip"
              inputProps={{ "aria-label": "search" }}
              // value={address}
              // onSubmit={e => setAddress(e.target.value)}
              onChange={handleChange}
            />
          </Search> */}

          {/* <form method="POST" action="http://localhost:3000/api/all">
            <input name="search" type="text" placeholder="city, state, or zip" onSubmit={handleChange}></input>
          </form>  */}
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
          <dataContext.Provider value={data}>
            <Maps className="map" />
          </dataContext.Provider>
        </div>
        <div
          className="rightTiles"
          style={{ width: "50%", height: "100%", float: "right" }}
        ></div>
      </div>
    </div>
  );
}


