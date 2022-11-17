const validateCPF = async (req, res, next) => {
  const { cpf } = req.body;

  if (!cpf) return res.status(400).json({ message: "The CPF does not empty" });

  if (cpf.length !== 11) {
    return res
      .status(400)
      .json({ message: "The CPF field must contain 11 numbers" });
  }
  next();
};

module.exports = validateCPF;
