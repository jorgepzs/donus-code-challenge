const User = require("../models/user");
const Deposit = require("../models/deposit");
const formatCPF = require("../utils/formatCPF");

const createDeposit = async (body) => {
  try {
    const { cpf, amount } = body;

    if (!(await User.findOne({ cpf }))) {
      return {
        error: {
          code: 404,
          message: `the account with ${formatCPF(cpf)} was not found`,
        },
      };
    }

    if (amount > 2000) {
      return {
        error: {
          code: 400,
          message: "Deposits can only be made with amounts less than R$2000.00",
        },
      };
    }
    const depositAmount = await Deposit.create({
      amount,
      cpf_reciver: cpf,
    });
    const putBalance = await User.updateOne(
      { cpf },
      { $inc: { balance: amount } }
    );
    return putBalance, depositAmount;
  } catch (error) {
    return error;
  }
};
module.exports = createDeposit;
