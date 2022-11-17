const request = require("supertest");
const User = require("../../models/user");
const app = require("../../app");

describe("Create Transfer", () => {
  beforeAll(async () => {
    return await User.insertMany([
      {
        name: "josue maria de paula",
        cpf: "75412999885",
      },
      {
        name: "Joao da Silva Sauro",
        cpf: "25666888554",
      },
    ]);
  });
  it("when amount, CPF and reciver_cpf is valid ", async () => {
    await User.updateOne({ cpf: "75412999885" }, { $inc: { balance: 4000 } });

    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "75412999885",
        amount: "200",
        reciver_cpf: "25666888554",
      });
    expect(createTransfer.status).toBe(201);
  });
  it("when CPF not found", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "44578423654",
        amount: 400,
        reciver_cpf: "25666888554",
      });
    expect(createTransfer.status).toBe(400);
  });

  it("when reciver_cpf  not found", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "75412999885",
        amount: 2500,
        reciver_cpf: "69666245551",
      });
    expect(createTransfer.status).toBe(400);
  });

  it("when amount is empty", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "75412999885",
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
        cpf: "75412999885",
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
        reciver_cpf: 25666888554,
      });
    expect(createTransfer.status).toBe(400);
  });
  it("when amount is negative", async () => {
    const createTransfer = await request(app)
      .put("/transaction/transfer")
      .send({
        cpf: "49490088855",
        amount: -600,
        reciver_cpf: 25666888554,
      });
    expect(createTransfer.status).toBe(400);
  });
});
