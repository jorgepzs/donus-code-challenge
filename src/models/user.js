const mongoose = require("../database");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("users", userSchema);

module.exports = User;
