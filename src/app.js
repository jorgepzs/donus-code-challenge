require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//controllers
require("./controllers/registerController")(app);
require("./controllers/depositController")(app);
require("./controllers/transferController")(app);

module.exports = app;
