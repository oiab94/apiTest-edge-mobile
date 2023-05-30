const request = require("supertest");
const app = require("../index");

describe("Prueba sobre la API", () => {

	describe("GET /api/people", () => {
		let response;

		beforeAll(async () => {
			response = await request(app).get("/api/people").send();
		})

		it("La ruta funciona", () => {
			expect(response.status).toBe(200);
			expect(response.headers["content-type"]).toContain("json");
		});

		it("La peticion nos devuelve un objeto", () => {
			expect(response.body).toBeInstanceOf(Object);
		})
	});
});
