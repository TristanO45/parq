import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../styles.scss";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const BookingForm = ({ hostName, address }) => {
  const [createDate, setCreateDate] = useState("");
  const [createLength, setCreateLength] = useState(0);

  const history = useHistory();

  const handleBooking = (e) => {
    const date = createDate;
    const length = createLength;

    e.preventDefault();
    console.log("handleBooking post called");

    axios
      .post(
        "/api/booking",
        {
          hostUsername: hostName,
          bookingDate: date,
          length: length,
          location: address,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        console.log("response from axios:", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>      <TextField
          onChange={(e) => setCreateLength(e.target.value)}
          required
          id="outlined-required"
          label="Length"
          defaultValue=""
        />
        <TextField
          onChange={(e) => setCreateDate(e.target.value)}
          required
          id="outlined-required"
          label="Date"
          defaultValue=""
        />
        <Button
          onClick={handleBooking}
          type="submit"
          color="primary"
          variant="contained"
          // style={btnstyle}
          fullWidth
        >
          {" "}
          Book
        </Button>
      </div>
    </Box>
  );
};
