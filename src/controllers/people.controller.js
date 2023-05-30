const { handleErrors } = require("../components/handleErrors");

const axios = require("axios").default;

/**
 * * Permite obtener los datos de todos los personajes de Star Wars
 */
const getAllPeople = (req, res) => {
	axios.get(process.env.API + "/api/people")
	// Busca y envia todos los datos de la API SWAPI
		.then(({ data }) => res.status(200).json(data))

	// Se controla y envia los errores recibidos
		.catch(err => {
			const error = handleErrors(err);

			res.status(400).json(error);
		});
};

module.exports = {
	getAllPeople,
};
