const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Client and Host Model
const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, requisred: true, unique: true },
  password: { type: String, required: true },
});

const bookingSchema = new Schema({
  clientUsername: { type: String, required: true },
  hostUsername: { type: String, required: true },
  bookingDate: { type: String, required: true },
  location: { type: String, required: true },
});

const locationSchema = new Schema({
  hostName: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  options: { type: String, required: true },
  size: { type: Number, required: true },
});

const User = mongoose.model("user", userSchema);
const Booking = mongoose.model("booking", bookingSchema);
const Location = mongoose.model("locations", LocationSchema);

module.exports = {
  Location,
  User,
  Booking,
};
