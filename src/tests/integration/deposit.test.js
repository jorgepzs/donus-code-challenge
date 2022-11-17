const request = require("supertest");
const app = require("../../app");
const User = require("../../models/user");
const Deposit = require("../../models/deposit");

describe("Create Deposit", () => {
  beforeAll(async () => {
    return await User.create({
      name: "joao carlos santos",
      cpf: "75466999885",
    });
  });
  afterAll(async () => {
    return await User.deleteMany(), await Deposit.deleteMany();
  });
  it("Status when amount and CPF account is valid ", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "75466999885",
      amount: "200",
    });
    expect(createDeposit.status).toBe(201);
  });
  it("Message when amount and CPF account is valid ", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "75466999885",
      amount: "200",
    });
    expect(createDeposit.text).toBe(
      '{"message":"your deposit in the account 754.669.998-85 in the amount of 200 was performed successfully!"}'
    );
  });

  it("Status when CPF not found", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "49400888554",
      amount: 400,
    });
    expect(createDeposit.status).toBe(400);
  });
  it("Message when CPF not found", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "49400888554",
      amount: 400,
    });
    expect(createDeposit.text).toBe(
      '"the account with 494.008.885-54 was not found"'
    );
  });
  it("when CPF is empty", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "",
      amount: "750",
    });
    expect(createDeposit.status).toBe(400);
  });
  it("Message when CPF is empty", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "",
      amount: 750,
    });
    expect(createDeposit.text).toBe('{"message":"The CPF does not empty"}');
  });
  it("Status when amount greater than 2000", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "75466999885",
      amount: 2500,
    });
    expect(createDeposit.status).toBe(400);
  });
  it("Message when amount greater than 2000", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "75466999885",
      amount: 2500,
    });
    expect(createDeposit.text).toBe(
      '"Deposits can only be made with amounts less than R$2000.00"'
    );
  });
  it("Status when amount is empty", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "75466999885",
    });
    expect(createDeposit.status).toBe(400);
  });
  it("Message when amount is empty", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "75466999885",
    });
    expect(createDeposit.text).toBe('{"message":"The amount does not empty"}');
  });
  it("Status when amount is negative", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "49490088855",
      amount: -600,
    });
    expect(createDeposit.status).toBe(400);
  });
  it("Message when amount is negative", async () => {
    const createDeposit = await request(app).put("/transaction/deposit").send({
      cpf: "49490088855",
      amount: -600,
    });
    expect(createDeposit.text).toBe(
      '{"message":"the value must be greater than zero "}'
    );
  });
});
