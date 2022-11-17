const request = require("supertest");
const User = require("../../models/user");

const app = require("../../app");

describe("Create Account", () => {
  afterAll(async () => {
    return await User.deleteMany();
  });
  it("Status when name and CPF is valid ", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49497288855",
      name: "mario barbosaaa",
    });
    expect(createUser.status).toBe(201);
  });
  it("Message when name and CPF is valid ", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49492287855",
      name: "joao carlos santos silveira rocha",
    });
    expect(createUser.text).toBe(
      '{"message":"your bank account was created successfully !"}'
    );
  });

  //CPF Tests
  it("Status when CPF is invalid", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "494900888554",
      name: "jose carlos da costa ",
    });
    expect(createUser.status).toBe(400);
  });
  it("Message when CPF is invalid", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "494900888554",
      name: "jose carlos",
    });
    expect(createUser.text).toBe(
      '{"message":"The CPF field must contain 11 numbers"}'
    );
  });
  it("Status when CPF is empty", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "",
      name: "mario barbosa coelho ",
    });
    expect(createUser.status).toBe(400);
  });
  it("Message when CPF is empty", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "",
      name: "jose carlos silveira",
    });
    expect(createUser.text).toBe('{"message":"The CPF does not empty"}');
  });
  it("Status when CPF already exists", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49492287855",
      name: "carlos santana sampaio",
    });
    expect(createUser.status).toBe(400);
  });
  it("Message  when CPF already exists", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49492287855",
      name: "jose carlos sampaio",
    });
    expect(createUser.text).toBe('"the CPF 494.922.878-55 already in use"');
  });

  //Name Tests
  it("Status when name is invalid", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49497888554",
      name: "jorge",
    });
    expect(createUser.status).toBe(400);
  });
  it("Message when name is invalid", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "94900888954",
      name: "jose",
    });
    expect(createUser.text).toBe('{"message":"fill in the full name"}');
  });
  it("Status when name is empty", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49490088851",
      name: "",
    });
    expect(createUser.status).toBe(400);
  });
  it("Message when name is empty", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49490088853",
      name: "",
    });
    expect(createUser.text).toBe('{"message":"The name does not empty"}');
  });
  it("Status when name already exists", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "48444555887",
      name: "joao carlos santos silveira rocha",
    });
    expect(createUser.status).toBe(400);
  });
  it("Message  when name already exists", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "29492288825",
      name: "joao carlos santos silveira rocha",
    });
    expect(createUser.text).toBe(
      '"The Name joao carlos santos silveira rocha already in use"'
    );
  });
});
