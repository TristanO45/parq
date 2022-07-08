import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../styles.scss";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignupPopup from "./SignupPopup.jsx";
import {Signup} from "./Signup.jsx";

export const Login = () => {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const history = useHistory();

  const handleLogin = (e) => {
    const username = createUsername;
    const password = createPassword;
    e.preventDefault();
    console.log("handleLogin post called");

    axios
      .post("/api/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("response from axios:", res);
        if (res.status === 201) {
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };

  if (loggedIn) {
    setTimeout(() => {
      history.push("/dashboard");
    }, 0);
  }

  const signupPopup = (e) => {
    e.preventDefault();
    setSignUp(true);
  };

  if (!signUp) {
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
          onChange={(e) => setCreateUsername(e.target.value)}
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField
          onChange={(e) => setCreatePassword(e.target.value)}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          onClick={handleLogin}
          type="submit"
          color="primary"
          variant="contained"
          // style={btnstyle}
          fullWidth
        >
          {" "}
          Log in
        </Button>
        <Button
          onClick={signupPopup}
          type="submit"
          color="primary"
          variant="contained"
          // style={btnstyle}
          fullWidth
        >
          {" "}
          No account? Sign up
        </Button>
      </div>
    </Box>
  )}
  else return (
    <Signup />
  );



};
