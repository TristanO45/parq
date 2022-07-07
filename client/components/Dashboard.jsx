import * as React from "react";
import { Component } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "../styles.scss";
import logo from "../assets/blueParq.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Map from "./Map.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <Search sx={{ border: ".75px solid #000000" }}>
              <SearchIconWrapper>
                <SearchIcon style={{ color: "#BBD1D1", opacity: "100%" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="city, state, or zip"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
        <div
          className="mapAndTiles"
          style={{ height: `calc( 100vh - 145px )` }}
        >
          <div
            className="leftMap"
            style={{ width: "49%", height: "100%", float: "left" }}
          >
            <Map className="map" /> 
          </div>
          <div
            className="rightTiles"
            style={{ width: "50%", height: "100%", float: "right" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
