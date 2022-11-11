const formatCPF = require("../utils/formatCPF");
const createAccount = async (body) => {
  try {
    const { name } = body;
    const cpf = formatCPF(body.cpf);

    return await User.create({ name, cpf });
  } catch (error) {
    return error;
  }
};
module.exports = createAccount;
