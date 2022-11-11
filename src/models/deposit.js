const mongoose = require("../database");

const depositSchema = new mongoose.Schema({
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
const Deposit = mongoose.model("deposits", depositSchema);

module.exports = Deposit;
