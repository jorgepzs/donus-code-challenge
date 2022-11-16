const mongoose = require("../database");

const depositSchema = new mongoose.Schema({
  amount: {
    type: Number,
    require: true,
    required: true,
  },
  cpf_reciver: {
    type: String,
    required: true,
    unique: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Deposit = mongoose.model("deposits", depositSchema);

module.exports = Deposit;
