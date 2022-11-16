const request = require("supertest");
const User = require("../../models/user");
const Deposit = require("../../models/deposit");
const app = require("../../app");

describe("Create Deposit", () => {
  beforeAll(async () => {
    return await User.create({
      name: "joao carlos silva",
      cpf: "33344333999",
    });
  });
  afterAll(async () => {
    const deleteUsers = User.deleteMany();
    const deleteDeposits = Deposit.deleteMany();
    return deleteUsers, deleteDeposits;
  });
  it("when amount and CPF account is valid ", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "33344333999",
      amount: "200",
    });
    expect(createDeposit.status).toBe(201);
  });

  it("when CPF not found", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "494900888554",
      amount: 400,
    });
    expect(createDeposit.status).toBe(400);
  });

  it("when amount greater than 2000", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "33344333999",
      amount: 2500,
    });
    expect(createDeposit.status).toBe(400);
  });

  it("when amount is empty", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "33344333999",
      amount: "",
    });
    expect(createDeposit.status).toBe(400);
  });
  it("when CPF is empty", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "",
      amount: "750",
    });
    expect(createDeposit.status).toBe(400);
  });
  it("when amount is negative", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "49490088855",
      amount: -600,
    });
    expect(createDeposit.status).toBe(400);
  });
});
