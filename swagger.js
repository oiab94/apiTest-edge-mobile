const swaggerUi = require("swagger-ui-express");
const swaggerJSdoc = require("swagger-jsdoc");

// * Opciones de swagger
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Test API SWAPI",
			version: "1.0.0",
		},
	},
	apis: ["./src/routes/people.route.js"]
};


// * Convertir a formato JSON
const swaggerSpec = swaggerJSdoc(options);


// * Inicia nuestra documentacion
const swaggerDocs = (app, port) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	console.log(`[Docs] Documentacion habilitada en http://localhost:${port}/api-docs`);
};

module.exports = { swaggerDocs };