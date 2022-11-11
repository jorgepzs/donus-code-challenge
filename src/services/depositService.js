const User = require("../models/user");
const Deposit = require("../models/deposit");

const deposit = async (body) => {
  try {
    const { name, cpf, amount } = body;

    if (!(await User.findOne({ cpf, name }))) {
      return { error: { code: 400, message: "conta não encontrada" } };
    }

    return Deposit.create({ name, cpf });
  } catch (error) {
    return error;
  }
};
module.exports = createAccount;
