const User = require("../models/user");
const verifyExistsCPF = async (req, res, next) => {
  const { cpf } = req.body;

  const checkExists = User.findOne(cpf);

  if (checkExists) {
    return res
      .status(400)
      .json({ message: 'O campo "cpf" não pode estar vázio' });
  }
};

module.exports = verifyExistsCPF;
