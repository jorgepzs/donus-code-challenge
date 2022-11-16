const User = require("../models/user");
const Transfer = require("../models/transfer");
const formatCPF = require("../utils/formatCPF");

const createTransfer = async (body) => {
  try {
    const { cpf, reciver_cpf, amount } = body;

    //verifications
    const getBalanceUser = await User.findOne({ cpf });
    const reciver = await User.findOne({ cpf: reciver_cpf });
    if (!getBalanceUser) {
      return {
        error: {
          code: 400,
          message: `the account with ${formatCPF(cpf)} was not found`,
        },
      };
    }
    if (!reciver) {
      return {
        error: {
          code: 400,
          message: `the account with ${formatCPF(reciver_cpf)} was not found`,
        },
      };
    }
    if (getBalanceUser.balance < amount) {
      return {
        error: {
          code: 400,
          message: `does not have sufficient balance, its balance is  ${getBalanceUser.balance}`,
        },
      };
    }
    if (cpf === reciver_cpf) {
      return {
        error: {
          code: 400,
          message: `you cannot transfer to yourself !!`,
        },
      };
    }

    //Actions
    const putBalanceUser = await User.updateOne(
      { cpf },
      { $inc: { balance: -amount } }
    );

    const putBalanceReciver = await User.updateOne(
      { cpf: reciver_cpf },
      { $inc: { balance: amount } }
    );
    const registerTransfer = Transfer.create({
      amount,
      reciver_cpf,
      user_cpf: cpf,
    });

    return putBalanceUser, putBalanceReciver, registerTransfer;
  } catch (Error) {
    return Error;
  }
};
module.exports = createTransfer;
