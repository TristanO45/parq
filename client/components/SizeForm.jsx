import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../styles.scss";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SizeForm() {
  const [createSize, setCreateSize] = useState(0);

  const history = useHistory();

  const handleSize = (e) => {
    const size = createSize;

    e.preventDefault();

    axios
      .post(
        "/api/size",
        {
          size: size,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        console.log("response from axios:", res);
        if (res.status === 200) {          
          history.push({
            pathname: "/dashboard",
            data: res.data,
          });
        }
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
      <div>
        <TextField
          onChange={(e) => setCreateSize(e.target.value)}
          required
          id="outlined-input"
          label="Size"
        />
        <Button
          onClick={handleSize}
          type="submit"
          color="primary"
          variant="contained"
          // style={btnstyle}
          fullWidth
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}