const User = require("../models/user");
const formatCPF = require("../utils/formatCPF");

const createAccount = async (body) => {
  try {
    const { name } = body;
    const { cpf } = body;
    if (await User.findOne({ cpf })) {
      return {
        error: {
          code: 400,
          message: `the CPF ${formatCPF(cpf)} already in use`,
        },
      };
    }

    if (await User.findOne({ name })) {
      return {
        error: {
          code: 400,
          message: `The Name ${name} already in use`,
        },
      };
    }
    return User.create({ name, cpf });
  } catch (error) {
    return error;
  }
};
module.exports = createAccount;
