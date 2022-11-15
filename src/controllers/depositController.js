const express = require("express");
const router = express.Router();

const validadeCPF = require("../middlewares/validadeCPF");
const validadeAmount = require("../middlewares/validadeAmount");
const createDeposit = require("../services/depositService");
const formatCPF = require("../utils/formatCPF");

router.put("/deposit", validadeCPF, validadeAmount, async (req, res) => {
  const { amount, cpf } = req.body;
  try {
    const deposit = await createDeposit(req.body);
    if (deposit.error) {
      return res.status(400).json(deposit.error.message);
    }
    return res.status(201).json({
      message: `Seu depósito na conta ${formatCPF(
        cpf
      )} no valor de ${amount} foi efetuado com Sucesso!`,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = (app) => app.use("/transaction", router);
