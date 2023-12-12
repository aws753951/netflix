const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.ATLAS).then(() => {
  console.log("mongoose connected");
});

app.listen("8080", () => {
  console.log("running");
});
