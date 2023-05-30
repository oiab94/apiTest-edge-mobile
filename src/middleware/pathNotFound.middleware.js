/**
 * * En caso de no encontrar la dirección solicitada, se retorna un mensaje
 * * indicando que no se pudo encontrar eso
 */
module.exports = (req, res) => {
	res.status(404).send("Sorry can't find that path!");
};
