const express = require("express")
const router = express.Router()

// routers
const apiController = require("../controller/apiController");

// get requests for a single location
router.get('/location', apiController.getLocation, (req, res, next) => {
    return res.status(200).json(res.locals.location)
})

// get request for bookings
router.get('/booking', apiController.getBooking, (req, res, next) => {
  return res.status(200).json(res.locals.booking);
})

// get request for all locations

router.get('/all', apiController.getAllLocation, (req, res, next) => {
  return res.status(200).json(res.locals.location)
})


// post requests for new location

router.post('/location', apiController.createLocation, (req, res, next) => {
  return res.status(200).json(res.locals.newLocation)
})

// post rquests for new bookings

router.post('/booking', apiController.createBooking, (req,res,next) => {
  return res.status(200).json(res.locals.booking);
})
module.exports = router;