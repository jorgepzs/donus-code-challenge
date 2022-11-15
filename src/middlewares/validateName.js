const validadeName = async (req, res, next) => {
  const { name } = req.body;

  const formatedName = name.replace(/\s/g, "");
  if (formatedName.length < 6) {
    return res.status(400).json({ message: "Preencha  o nome completo" });
  }
  if (!name) {
    return res
      .status(400)
      .json({ message: `O campo name não pode estar vázio` });
  }
  next();
};

module.exports = validadeName;
