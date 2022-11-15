const validadeAmount = async (req, res, next) => {
  const { amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: `O valor deve ser maior que zero` });
  }
  if (!amount) {
    return res.status(400).json({ message: `O valor deve ser preenchido` });
  }

  next();
};

module.exports = validadeAmount;
