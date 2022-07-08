const express = require("express");
const jwt = require("jsonwebtoken");

cookieController = {};

cookieController.setCookie =  (req, res, next) => {
  const { username } = req.body;
  const token = generateAuthToken(username);
  res.cookie("access_token", token, {
    httpOnly: true
  });
  return next();
};
//authorization:
//for FRONTEND: send token in Authorization header: `authorization: Bearer: ${accessToken}`


cookieController.verifyCookie = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(403).send("Cannot verify user");
  }
  try {
     jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
      if (err) {
        //redirect
        return next(err)
      }
      return next();
    })
 
    // req.userId = data.id;

  } catch (err) {
    return res.status(403).send("Cannot authorize user", err);
  }
};

//clear cookie on logout:
cookieController.logout = (req, res, next) => {
  res.clearCookie("access_token");
  return next();
};

//example for protected route to get the data from jwt (will need to use use username):
// app.get("/protected", verifyCookie, (req, res) => {
//   return res.json({ user: { id: req.userId} });
//  });

function generateAuthToken(username) {
  const token = jwt.sign({ username: username }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
}

// The server side can send the JWT token to the browser through a cookie, and the browser will automatically bring the JWT token in the cookie header when requesting the server-side interface, and the server side can verify the JWT token in the cookie header to achieve authentication.

module.exports = cookieController;
