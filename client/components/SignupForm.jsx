import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SignupForm() {

  //const [info, setInfo] = useState("")
  

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setlastName] = useState("")
  // const [username, setuserName] = useState("")
  // const [password, setPassword] = useState("")
  // const [createUsername, setCreateUsername] = useState("")
  // const [createPassword, setCreatePassword] = useState("")
  // const [loggedIn, setLoggedIn] = useState(false)

  // const history = useNavigate();

  // const handleSignup = (e) => {
  //   const username = createUsername
  //   const password = createPassword
  //   e.preventDefault()
  //   console.log("handleSignup post called")

  //   axios.post("/api/", {
  //     username: username,
  //     password: password,
  //   }).then((res) => {
  //   })

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
          label="city, state, zip code"
          defaultValue=""
          // onChange={e => setInfo(e.target.value)}
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
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );

}



// //Mike's Option:

// const [user, setUser] = useState({
//     firstname: "",
//     lastname: "",
//     username: ""
//   });

// useEffect