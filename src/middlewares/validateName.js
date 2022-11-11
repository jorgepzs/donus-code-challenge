const User = require("../models/user");
const validadeName = async (req, res, next) => {
  const { name } = req.body;

  if (await User.findOne({ name })) {
    return res
      .status(400)
      .json({ message: `o Nome ${name} ja está cadastrado` });
  }
  const formatedName = name.replace(/\s/g, "");
  if (formatedName.length < 6) {
    return res.status(400).json({ message: "Preencha seu nome completo" });
  }
  if (!name) {
    return res
      .status(400)
      .json({ message: `O campo name não pode estar vázio` });
  }
  next();
};

module.exports = validadeName;
