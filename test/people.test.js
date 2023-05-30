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


	describe("GET /api/people/:id", () => { 
		let response;

		it("Encuentra el id retorna status 200 y el objeto", async () => {
			const id = 12;
			response = await request(app).get(`/api/people/${id}`);

			expect(response.status).toBe(200);
		})

		it("No encuentra el id retorna status 400 y un objeto", async () => {
			const id = 122;
			response = await request(app).get(`/api/people/${id}`);

			expect(response.status).toBe(400);
		})
	})
});
