const express = require("express");
const validadeCPF = require("../middlewares/validadeCPF");
const verifyExistsCPF = require("../middlewares/verifyCPF");
const createAccount = require("../services/userService");

const router = express.Router();

router.post("/register", verifyExistsCPF, validadeCPF, async (req, res) => {
  try {
    const userData = req.body;

    const registerUser = await createAccount(userData);

    return res.status(201).json({
      message: "Sua conta bancária foi criada com Sucesso!",
    });
  } catch (error) {
    return res.send(error);
  }
});
module.exports = (app) => app.use("/user", router);
