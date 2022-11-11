const mongoose = require("../database");

const transferSchema = new mongoose.Schema({
  amount: {
    type: Number,
    require: true,
    unique: true,
    required: true,
  },
  user_cpf: {
    type: String,
    unique: true,
    required: true,
  },
  user_cpf: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Transfer = mongoose.model("transfers", transferSchema);

module.exports = User;
