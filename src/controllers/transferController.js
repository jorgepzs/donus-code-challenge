const express = require("express");
const router = express.Router();
const validateReciverCPF = require("../middlewares/validateReciverCPF");
const validadeCPF = require("../middlewares/validadeCPF");
const validadeAmount = require("../middlewares/validadeAmount");
const createTransfer = require("../services/transferService");
const formatCPF = require("../utils/formatCPF");

router.put(
  "/transfer",
  validadeCPF,
  validadeAmount,
  validateReciverCPF,

  async (req, res) => {
    const { amount, reciver_cpf } = req.body;

    try {
      const transfer = await createTransfer(req.body);

      if (transfer.error) {
        return res.status(400).json(transfer.error.message);
      }

      return res.status(201).json({
        message: `Your transfer to account${formatCPF(
          reciver_cpf
        )} amounting to  ${amount} was successful!`,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
);
module.exports = (app) => app.use("/transaction", router);
