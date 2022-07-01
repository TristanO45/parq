const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

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

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const validate = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label("username"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

const User = mongoose.model("user", userSchema);
const Booking = mongoose.model("booking", bookingSchema);
const Location = mongoose.model("locations", LocationSchema);

module.exports = {
  Location,
  User,
  Booking,
  validate
};
