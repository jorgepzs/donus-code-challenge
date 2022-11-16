const validateReciverCPF = async (req, res, next) => {
  const { reciver_cpf } = req.body;

  if (!reciver_cpf)
    return res.status(400).json({ message: "the reciver CPF does not empty" });

  if (reciver_cpf.length !== 11) {
    return res
      .status(400)
      .json({ message: "the reciver CPF must contain 11 numbers" });
  }
  next();
};

module.exports = validateReciverCPF;
