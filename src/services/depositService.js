const User = require("../models/user");
const Deposit = require("../models/deposit");
const formatCPF = require("../utils/formatCPF");

const createDeposit = async (body) => {
  try {
    const { cpf, amount } = body;

    if (!(await User.findOne({ cpf }))) {
      return {
        error: { code: 404, message: `conta ${formatCPF(cpf)} não encontrada` },
      };
    }

    if (amount > 2000) {
      return {
        error: {
          code: 400,
          message:
            "Os depósitos só podem ser feitos com valores menores que R$2000,00",
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
