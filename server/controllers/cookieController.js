const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

cookieController = {};

// cookieController.setCookie = (req, res, next) => {
//   const { username } = req.body;
//   const token = generateAuthToken(username);
//   res.cookie("access_token", token, {
//     httpOnly: true,
//   });
//   return next();
// };

cookieController.setCookie = (req, res, next) => {
  const { username } = req.body;
  const token = generateAuthToken(username);
  res.locals.access_token = token;
  return next();
};
//authorization:
//for FRONTEND: send token in Authorization header: `authorization: Bearer: ${accessToken}`

cookieController.verifyCookie = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(403).send("Cannot verify user");
  }
  try {
    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
      if (err) {
        //redirect
        return next(err);
      }
      res.locals.username = decoded.username;
      return next();
    });
  } catch (err) {
    return res.status(403).send("Cannot authorize user", err);
  }
};

//clear cookie on logout:
cookieController.logout = (req, res, next) => {
  res.clearCookie("access_token");
  return next();
};

function generateAuthToken(username) {
  const token = jwt.sign({ username: username }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
}

module.exports = cookieController;
