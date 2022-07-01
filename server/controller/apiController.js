const { Location, Booking } = require("../models/userModel");

const apiController = {};



// "Create location" controller
apiController.createLocation = async (req, res, next) => {
  // When host adds listing, create new location in the db
  try {
    const { hostName, address, price, options, size } = req.body;
    //get coords for api
    await Location.create({ hostName, address, price, options, size }).then(
      (locationSaved) => {
        res.locals.newLocation = locationSaved;
        return next();
      }
    );
  } catch (err) {
    return next({
      log: `apiController.createLocation: Error: ${err}`,
      message: {
        err: "Error occured in apiController.createLocation",
      },
    });
  }
};

// "Create booking" controller

//"get booking" controller

// "get location data" controller (singular)
// based on address, return location data
apiController.getLocation = (req, res, next) => {
  //get address entered by user from request
  const { address } = req.body; // Actual location in res TBD
  Location.findOne({ address }, (err, docs) => {
    if (err) {
      return next({
        log:`apiController.getLocation error :${err}`,
        message: {
          err: "Error occured in getLocation"}
        });
    }

    res.locals.location = docs;
    return next();
  });
};
//"get all locations" controller
