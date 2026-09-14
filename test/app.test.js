const request = require("supertest");
const app = require("../src/app");

describe("API de atletas", () => {

  test("deve retornar a lista de atletas", async () => {
    const response = await request(app).get("/atletas");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("deve cadastrar um atleta", async () => {
    const response = await request(app)
      .post("/atletas")
      .send({
        nome: "Carlos",
        modalidade: "Basquete"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.nome).toBe("Carlos");
  });

});