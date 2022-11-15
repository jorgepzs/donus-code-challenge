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
          message: `o CPF ${formatCPF(cpf)} ja está cadastrado`,
        },
      };
    }

    if (await User.findOne({ name })) {
      return {
        error: {
          code: 400,
          message: `o Nome ${name} ja está cadastrado`,
        },
      };
    }
    return User.create({ name, cpf });
  } catch (error) {
    return error;
  }
};
module.exports = createAccount;
