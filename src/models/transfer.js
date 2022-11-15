const mongoose = require("../database");

const transferSchema = new mongoose.Schema({
  amount: {
    type: Number,
    require: true,
    required: true,
  },
  reciver_cpf: {
    type: String,
    unique: false,
    required: true,
  },
  user_cpf: {
    type: String,
    unique: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Transfer = mongoose.model("transfers", transferSchema);

module.exports = Transfer;
