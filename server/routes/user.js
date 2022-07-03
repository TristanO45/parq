const express = require("express");
const router = express.Router();
const signupController = require("../server/controllers/signupController")
const loginController = require("../server/controllers/loginController")

router.post("/signup", signupController.signUp, loginController.createToken, (req, res) => {
  res.status(201).send({ data: token, message: "User created successfully" });
});
router.post("/login", loginController.loginUser, loginController.createToken, (req, res) => {
  res.status(200).send({ data: token, message: "Logged in successfully" });
});

module.exports = router;