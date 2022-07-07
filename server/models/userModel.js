const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Client and Host Model
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // token: { type: String },
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
  coordinates: { lat: Number, lng: Number },
});

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
//     expiresIn: "7d",
//   });
//   return token;
// };

const User = mongoose.model("user", userSchema);
const Booking = mongoose.model("booking", bookingSchema);
const Location = mongoose.model("locations", locationSchema);

module.exports = {
  Location,
  User,
  Booking,
};
