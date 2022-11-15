const User = require("../models/user");
const Transfer = require("../models/transfer");
const formatCPF = require("../utils/formatCPF");

const createTransfer = async (body) => {
  try {
    const { cpf, reciver_cpf, amount } = body;

    //verifications
    const getBalanceUser = await User.findOne({ cpf });

    if (getBalanceUser.balance < amount) {
      return {
        error: {
          code: 400,
          message: `Não possui saldo suficiente, Seu saldo é de R$ ${getBalanceUser.balance}`,
        },
      };
    }
    if (cpf === reciver_cpf) {
      return {
        error: {
          code: 400,
          message: `Você não pode transferir para você mesmo!!`,
        },
      };
    }
    if (!getBalanceUser) {
      return {
        error: {
          code: 400,
          message: `A conta ${formatCPF(cpf)} não foi encontrada`,
        },
      };
    }
    if (!(await User.findOne({ cpf: reciver_cpf }))) {
      return {
        error: {
          code: 400,
          message: `A conta ${formatCPF(reciver_cpf)} não foi encontrada`,
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
  } catch (error) {
    return error;
  }
};
module.exports = createTransfer;
