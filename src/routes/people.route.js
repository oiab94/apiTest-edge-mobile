const { Router } = require("express");
const { 
	getAllPeople, 
	getPeopleById,
	getCharacterBySearch } = require("../controllers/people.controller");

// * Variables
const router = Router();

// * Direccionamiento

/**
 * @swagger
 * /api/people:
 *  get:
 *     summary: Return a object with all the characters from Star Wars
 *     description: Get all the Star Wars characters from SWAPI
 *     responses:
 *      200:
 *         description: OK
 *      400:
 *         description: Bad Request
 */
router.get("/api/people", getAllPeople);
router.get("/api/people/:id", getPeopleById);
router.get("/api/peopleSearch/", getCharacterBySearch);

module.exports = router;