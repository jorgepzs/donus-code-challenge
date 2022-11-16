require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const mongoose = require("mongoose");
require("dotenv").config();
try {
  const URI = process.env.MONGO_URL;
  mongoose.connect(URI);
  mongoose.Promise = global.Promise;
} catch (error) {
  console.log(error);
}

module.exports = mongoose;
