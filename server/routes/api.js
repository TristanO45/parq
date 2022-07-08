const express = require("express");
const router = express.Router();

// controllers
const apiController = require("../controllers/apiController");
const loginController = require("../controllers/loginController");
const cookieController = require("../controllers/cookieController");
const googleRequestController = require("../controllers/googleController");

// get requests for a single location - When user clicks a marker on the map
router.get("/location", apiController.getLocation, (req, res, next) => {
  return res.status(200).json(res.locals.location);
});

// get request for bookings
router.get("/booking", apiController.getBooking, (req, res, next) => {
  return res.status(200).json(res.locals.booking);
});

// get request for all locations

router.post(
  "/all",
  googleRequestController.mapLocation,
  apiController.getAllLocation,
  (req, res, next) => {
    return res.status(200).json(res.locals.result);
  }
);

// post requests for new location

router.post(
  "/location",
  googleRequestController.mapLocation,
  apiController.createLocation,
  (req, res, next) => {
    return res.status(200).json(res.locals.data);
  }
);

// post rquests for new bookings

router.post("/booking", apiController.createBooking, (req, res, next) => {
  return res.status(200).json(res.locals.booking);
});

router.post("/test", cookieController.verifyCookie, (req, res) => {
  return res.status(200).json("Logged in");
});

module.exports = router;
