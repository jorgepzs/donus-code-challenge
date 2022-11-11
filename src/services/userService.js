const User = require("../models/user");

const createAccount = async (body) => {
  try {
    const { name } = body;
    const { cpf } = body;

    return User.create({ name, cpf });
  } catch (error) {
    return error;
  }
};
module.exports = createAccount;
