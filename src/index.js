const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/registerController")(app);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
module.exports = app;
