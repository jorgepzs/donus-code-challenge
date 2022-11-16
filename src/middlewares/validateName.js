const validadeName = async (req, res, next) => {
  const { name } = req.body;

  const formatedName = name.replace(/\s/g, "");
  if (formatedName.length < 6) {
    return res.status(400).json({ message: "fill in the full name" });
  }
  if (!name) {
    return res.status(400).json({ message: `The name does not empty` });
  }
  next();
};

module.exports = validadeName;
