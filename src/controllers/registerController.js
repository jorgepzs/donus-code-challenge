const express = require("express");
const router = express.Router();

const validadeCPF = require("../middlewares/validadeCPF");
const validadeName = require("../middlewares/validateName");
const createAccount = require("../services/userService");

router.post("/register", validadeCPF, validadeName, async (req, res) => {
  try {
    const registerUser = await createAccount(req.body);

    if (registerUser.error) {
      return res
        .status(500)
        .json({ message: "Sua conta Bancaria não foi registrada!" });
    }

    return res.status(201).json({
      message: "Sua conta bancária foi criada com Sucesso!",
    });
  } catch (error) {
    return res.send(error);
  }
});
module.exports = (app) => app.use("/user", router);
