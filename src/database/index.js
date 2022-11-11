const mongoose = require("mongoose");
require("dotenv").config();
try {
  const URI = process.env.MONGO_URL;
  mongoose.connect(URI);
  mongoose.Promise = global.Promise;
} catch (error) {
  return error;
}

module.exports = mongoose;
