import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SignupForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}