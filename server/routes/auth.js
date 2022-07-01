const express = require("express");
const router = express.Router();
const { User } = require("../models/userModel");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });
  
      //verify username
      const user = await User.findOne({ username: req.body.username });
      if (!user)
        return res.status(401).send({ message: "Invalid username or password" });

      //verify password
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(401).send({ message: "Invalid username or password" });
  
      //generate token
      const token = user.generateAuthToken();
      res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
  const validate = (data) => {
    const schema = Joi.object({
      username: Joi.string().required().label("username"),
      password: Joi.string().required().label("password"),
    });
    return schema.validate(data);
  };
  
  module.exports = router;