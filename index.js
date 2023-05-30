require("dotenv").config();
const express = require("express");


// * Inicia express
const app = express();
app.listen(
	process.env.PORT,
	() => {
		console.log(`[Express] Iniciado en el puerto ${process.env.PORT}`);
	}
);