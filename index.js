require("dotenv").config();
const express = require("express");
const apiTestRoute = require("./src/routes/apiTest.route");
const pathNotFound = require("./src/middleware/pathNotFound.middleware");
const peopleRoute = require("./src/routes/people.route");

// * Inicia express
const app = express();
app.listen(
	process.env.PORT,
	() => {
		console.log(`[Express] Iniciado en el puerto ${process.env.PORT}`);
	}
);

// * Rutas de la API
// Test de API
app.use("/", apiTestRoute);
app.use(peopleRoute);

// * Manejo de rutas no encontradas
app.use(pathNotFound);