const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

cookieController = {};

cookieController.setCookie = async (req, res, next) => {
  const { username } = req.body;
  const token = await generateAuthToken(username);
  res.cookie("access_token", token, {
    httpOnly: true,
  });
  return next();
};
//authorization:
//for FRONTEND: send token in Authorization header: `authorization: Bearer: ${accessToken}`

cookieController.verifyCookie = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).send("Cannot verify user");
  }
  try {
    const data = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.userId = data.id;
    return next();
  } catch {
    return res.status(403).send("Cannot authorize user");
  }
};

//clear cookie on logout:
cookieController.logout = (req, res, next) => {
  //logout route to clear the cookie:
  // res.status(202).clearCookie('access-token').send('cookie cleared')
  res.clearCookie("access_token");
  return next();
};

//example for protected route to get the data from jwt:
// app.get("/protected", verifyCookie, (req, res) => {
//   return res.json({ user: { id: req.userId} });
//  });

function generateAuthToken(username) {
  const token = jwt.sign({ username }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
}

// The server side can send the JWT token to the browser through a cookie, and the browser will automatically bring the JWT token in the cookie header when requesting the server-side interface, and the server side can verify the JWT token in the cookie header to achieve authentication.

module.exports = cookieController;
