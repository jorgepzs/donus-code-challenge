const request = require("supertest");
const User = require("../../models/user");
const Transfer = require("../../models/Transfer");
const app = require("../../app");
const Deposit = require("../../models/Deposit");

describe("Create Transfer", () => {
  beforeAll(async () => {
    const createSender = User.create({
      name: "jose carlos silva",
      cpf: "33344333995",
    });
    const putBalanceSender = Deposit.create({
      amount: 2000,
      cpf_reciver: "33344333995",
    });

    const createReciver = User.create({
      name: "Joao da Silva Sauro",
      cpf: "69666888554",
    });
    return await putBalanceSender, createSender, createReciver;
  });
  afterEach(async () => {
    const deleteUsers = User.deleteMany();
    const deleteTransfers = Transfer.deleteMany();
    return await deleteUsers, deleteTransfers;
  });
  it("when amount, CPF and reciver_cpf is valid ", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "33344333995",
        amount: "200",
        reciver_cpf: "69666888554",
      });
    expect(createTransfer.status).toBe(201);
  });
  it("when CPF not found", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "44578423654",
        amount: 400,
        reciver_cpf: "69666888554",
      });
    expect(createTransfer.status).toBe(400);
  });

  it("when reciver_cpf  not found", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "33344333995",
        amount: 2500,
        reciver_cpf: "69666245551",
      });
    expect(createTransfer.status).toBe(400);
  });

  it("when amount is empty", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "33344333995",
        amount: "",
        reciver_cpf: "69666888551",
      });
    expect(createTransfer.status).toBe(400);
  });
  it("when CPF is empty", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "",
        amount: "750",
        reciver_cpf: "69666888551",
      });
    expect(createTransfer.status).toBe(400);
  });
  it("when reciver_cpf is empty", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "33344333995",
        amount: "750",
        reciver_cpf: "",
      });
    expect(createTransfer.status).toBe(400);
  });
  it("when the balance is not sufficient", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "49490088855",
        amount: 4600,
        reciver_cpf: 69666888554,
      });
    expect(createTransfer.status).toBe(400);
  });
  it("when amount is negative", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "49490088855",
        amount: -600,
        reciver_cpf: 69666888554,
      });
    expect(createTransfer.status).toBe(400);
  });
});
