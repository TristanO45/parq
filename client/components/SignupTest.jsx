import React, { useEffect } from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

export default function Signup() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  })

//   const [firstName, setFirstName] = useState("")
//   const [lastName, setlastName] = useState("")
//   const [username, setuserName] = useState("")
//   const [password, setPassword] = useState("")
//   const [createFirstName, setCreateFirstname] = useState("")
//   const [createLastname, setCreateLastname] = useState("")
//   const [createUsername, setCreateUsername] = useState("")
//   const [createPassword, setCreatePassword] = useState("")
  //const [loggedIn, setLoggedIn] = useState(false)

  //const history = useNavigate();

  const initSignup = () => {
    axios
    .post("/api/signup", {user})
    .then((res) => {
        console.log(res)
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    initSignup();
  }, []);

//   const handleSignup = (e) => {
//     const firstName = createFirstName
//     const lastName = createLastname
//     const username = createUsername
//     const password = createPassword
//     e.preventDefault()
//     console.log("handleSignup post called")

//     axios.post("/api/signup", {
//         data:{
//     firstName: firstName,
//     lastName: lastName,
//       username: username,
//       password: password,
//         }
//     }).then((res) => {
//         console.log(res)
//     })
//     .catch(err => console.log(err))
// }

// if (loggedIn) {
//     setTimeout(() => {
//         history("/dashboard")
//     }, 0);
// }

const btnstyle = { margin: "8px 0" };

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
        onChange={(e) => setUser.firstname(e.target.value)}
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
          
        />
        <TextField
        onChange={(e) => setUser.LastName(e.target.value)}
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
        <TextField
        onChange={(e) => setUser.username(e.target.value)}
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField
        onChange={(e) => setUser.password(e.target.value)}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          onClick={initSignup}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Create account and Sign in
        </Button>
      </div>
    </Box>
  );

}