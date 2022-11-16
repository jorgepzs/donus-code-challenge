const request = require("supertest");
const User = require("../../models/user");

const app = require("../../app");

describe("Create Account", () => {
  afterAll(async () => {
    return await User.deleteMany();
  });
  it("when name and CPF is valid ", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49492288855",
      name: "mario barbosa",
    });
    expect(createUser.status).toBe(201);
  });

  it("when CPF is invalid", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "494900888554",
      name: "jose carlos",
    });
    expect(createUser.status).toBe(400);
  });

  it("when name is invalid", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "494900888554",
      name: "jorge",
    });
    expect(createUser.status).toBe(400);
  });
  it("when name is empty", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "494900888554",
      name: "",
    });
    expect(createUser.status).toBe(400);
  });
  it("when CPF is empty", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "",
      name: "mario barbosa",
    });
    expect(createUser.status).toBe(400);
  });
  it("when CPF already exists", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "49492288855",
      name: "carlos santana",
    });
    expect(createUser.status).toBe(400);
  });
  it("when name already exists", async () => {
    const createUser = await request(app).post("/user/register").send({
      cpf: "48444555887",
      name: "mario barbosa",
    });
    expect(createUser.status).toBe(400);
  });
});
