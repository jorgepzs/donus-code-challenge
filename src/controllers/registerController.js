const express = require("express");
const router = express.Router();

const validadeCPF = require("../middlewares/validadeCPF");
const validadeName = require("../middlewares/validateName");
const createAccount = require("../services/userService");

router.post("/register", validadeCPF, validadeName, async (req, res) => {
  try {
    const registerUser = await createAccount(req.body);

    if (registerUser.error) {
      return res.status(400).json(registerUser.error.message);
    }

    return res.status(201).json({
      message: "your bank account was created successfully !",
    });
  } catch (error) {
    return res.send(error);
  }
});
module.exports = (app) => app.use("/user", router);
