const axios = require("axios").default;
const { handleErrors } = require("../components/handleErrors");


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

/**
 * * Permite obtener los datos de un personaje en especifico a tráves de un id 
 */
const getPeopleById = (req, res) => {
	const { id } = req.params;

	axios.get(process.env.API + "/api/people/" + id)
		// Busca y envia los datos por medio de un ID
		.then(({ data }) => res.status(200).json(data))
		
		// Se controla y envia los errores recibidos
		.catch(err => {
			let error = handleErrors(err);

			error = { ...error, id};

			res.status(400).json(error);
		});
};

/**
 * * Permite buscar los datos de un personaje
 */
const getCharacterBySearch = (req, res) => {
	const { search } = req.query;

	axios.get(process.env.API + "/api/people/?search=" + search)
		// Busca y envia los datos a tráves del query search
		.then(({ data }) => {
			let { results } = data;

			if(Array.isArray(results))
				res.status(200).json(results);
			else 
				// Si SWAPI no retorna un array, entonces indicamos que hubo en error en el server
				res.status(500).json({"message": "An internal server error has occured"});
		})
		.catch(err => {
			let error = handleErrors(err);

			res.status(400).json(error);
		});
};

module.exports = {
	getAllPeople,
	getPeopleById,
	getCharacterBySearch
};
