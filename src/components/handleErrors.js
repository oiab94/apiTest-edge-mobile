/**
 * * Controla los errores que se pueden recibir desde el servidor
 */
module.exports.handleErrors = ({code, config}) => {
	let error = {message: "", path: ""};

	// * Si recibimos el siguiente código retornamos un mensaje
	if(code === "ERR_BAD_REQUEST"){
		error.message = "path not exist";
		error.path = config.url;

		return error;
	}
};