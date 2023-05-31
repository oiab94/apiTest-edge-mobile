require("dotenv").config();
const express = require("express");
const apiTestRoute = require("./src/routes/apiTest.route");
const pathNotFound = require("./src/middleware/pathNotFound.middleware");
const peopleRoute = require("./src/routes/people.route");

// * Inicia express
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`[Express] Iniciado en el puerto ${PORT}`);
});

// * Rutas de la API
// Test de API
app.use("/", apiTestRoute);
app.use(peopleRoute);

// * Manejo de rutas no encontradas
app.use(pathNotFound);

// * Exportamos la app para realizar los test
module.exports = app;