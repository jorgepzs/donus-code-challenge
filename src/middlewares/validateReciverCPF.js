const validateReciverCPF = async (req, res, next) => {
  const { reciver_cpf } = req.body;

  if (!reciver_cpf)
    return res
      .status(400)
      .json({ message: "O campo reciver CPF não pode estar vázio" });

  if (reciver_cpf.length !== 11) {
    return res
      .status(400)
      .json({ message: "O campo reciver CPF deve conter 11 números" });
  }
  next();
};

module.exports = validateReciverCPF;
