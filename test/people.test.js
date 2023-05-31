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

	describe("GET /api/peopleSearch/?search=as", () => {
		it("Encuentra la palabra indicada, retorna status 200 y el objeto", async () => {
			let search = "as";
			response = await request(app).get(`/api/people/?search=${search}`);
			
			expect(response.status).toBe(200);
		});

		it("Si la palabra no se encuentra debe retornar un array vacio", async () => {
			let search = "asdf";
			response = await request(app).get(`/api/people/?search=asdf`);
		
			console.log(response.body);
			expect(response.body.results).toBeInstanceOf(Array);
		})

	});
});
