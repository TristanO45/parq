const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(express.json());
//app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
