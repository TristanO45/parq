const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// const userController = require("../controllers/userController");

const { User, validate } = require("../models/userModel");

router.post("/", async (req, res) => {
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
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ messsage: "Internal Server Error" });
  }
});

// router.get("/:username", userController.getUser);
// router.delete("/:username", userController.deleteUser);

module.exports = router;