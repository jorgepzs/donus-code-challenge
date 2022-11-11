const User = require("../models/user");

const validateCPF = async (req, res, next) => {
  const { cpf } = req.body;

  if (await User.findOne({ cpf })) {
    return res.status(400).json({ message: `o CPF:${cpf} ja está cadastrado` });
  }

  if (!cpf)
    return res
      .status(400)
      .json({ message: "O campo CPF não pode estar vázio" });

  if (cpf.length !== 11) {
    return res
      .status(400)
      .json({ message: "O campo CPF deve conter 11 números" });
  }
  next();
};

module.exports = validateCPF;
