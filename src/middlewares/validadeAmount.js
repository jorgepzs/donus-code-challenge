const validadeAmount = async (req, res, next) => {
  const { amount } = req.body;

  if (amount <= 0) {
    return res
      .status(400)
      .json({ message: `the value must be greater than zero ` });
  }
  if (!amount) {
    return res.status(400).json({ message: `The amount does not empty` });
  }

  next();
};

module.exports = validadeAmount;
