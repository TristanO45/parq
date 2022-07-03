const express = require("express");
const bcrypt = require("bcrypt");

const { User, validate } = require("../models/userModel");

const signupController = {}

signupController.signUp = async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    //check if username already exists
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given username already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    await new User({ ...req.body, password: hashPassword }).save();
    return next()

  } catch (error) {
    res.status(500).send({ messsage: "Internal Server Error" });
  }
};

module.exports = signupController;