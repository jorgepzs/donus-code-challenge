const validadeName = async (req, res, next) => {
  const { name } = req.body;
  const removedSpaces = name.trim();
  const splitName = removedSpaces.split(/\s* \s*/);
  const countWords = splitName.length;

  if (!name) {
    return res.status(400).json({ message: `The name does not empty` });
  }
  if (countWords <= 1) {
    return res.status(400).json({ message: "fill in the full name" });
  } else {
    next();
  }
};

module.exports = validadeName;
