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
// const bookingSchema = new Schema({
//   clientUsername: { type: String, required: true },
//   hostUsername: { type: String, required: true },
//   bookingDate: { type: String, required: true },
//   location: { type: String, required: true },
// });
// "Create booking" controller
apiController.createBooking = (req, res, next) => {
  //get input from user request (TBD)
  const { username, hostName, date, location } = req.body;
  Booking.create(
    {
      clientUsername: username,
      hostUsername: hostName,
      bookingDate: date,
      location,
    },
    (err, docs) => {
      if (err) {
        return next({
          log: `apiController.getLocation error :${err}`,
          message: {
            err: "Error occured in getLocation",
          },
        });
      }
      res.locals.booking = docs;
      return next();
    }
  );
};

// "Get booking" controller
apiController.getBooking = async (req, res, next) => {
  // find booking that was stored in database
  const { clientUsername } = req.body;
  await Booking.findOne({ clientUsername }).then((result) => {
    if (result) {
      console.log("Booking found in database!");
      res.locals.booking = {
        message: "Confirmed Booking",
        verified: true,
      };
      return next();
    } else {
      console.log("Booking not found in database");
      return next({
        log: `apiController.getBooking error`,
        message: {
          err: "Error occured finding booking location",
        },
      });
    }
  });
};

// "Get location data" controller (singular)
// based on address, return location data
apiController.getLocation = (req, res, next) => {
  //get address entered by user from request
  const { address } = req.body; // Actual location in res TBD
  console.log(address);
  Location.findOne({ address }, (err, docs) => {
    if (err) {
      return next({
        log: `apiController.getLocation error :${err}`,
        message: {
          err: "Error occured in getLocation",
        },
      });
    }
    res.locals.location = docs;
    console.log(docs);
    return next();
  });
};

//"get all locations" controller
apiController.getAllLocation = (req, res, next) => {
  //get all locations
  console.log("inside controller");
  Location.find({}, (err, docs) => {
    console.log(docs);
    if (err) {
      return next({
        log: `apiController.getAllLocation error :${err}`,
        message: {
          err: "Error occured in getAllLocation",
        },
      });
    }

    res.locals.location = docs;
    console.log(res.locals.location);
    return next();
  });
};

module.exports = apiController;
