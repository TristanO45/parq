const { Location } = require("../models/userModel");

const sizeFilterController = {}

sizeFilterController.filterSize = (req, res, next)  => {
  const {size} = req.body
  Location.find({size: {$gte: size}}, (err, listings) => {
    if (err) {
        return next({
          log: `sizeFilterController.filterSize error :${err}`,
          message: {
            err: "Error occured in sizeFilterController",
          },
        });
      }
      res.locals.filteredSizes = listings
      return next();
  })
}

module.exports = sizeFilterController;