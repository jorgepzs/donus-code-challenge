const User = require("../models/user");
const Transfer = require("../models/Transfer");
const Deposit = require("../models/deposit");

afterAll(async () => {
  return await (User.deleteMany(), Deposit.deleteMany(), Transfer.deleteMany());
});
