const { Router } = require("express");
const { 
	getAllPeople, 
	getPeopleById,
	getCharacterBySearch } = require("../controllers/people.controller");

// * Variables
const router = Router();

// * Direccionamiento
router.get("/api/people", getAllPeople);
router.get("/api/people/:id", getPeopleById);
router.get("/api/peopleSearch/", getCharacterBySearch);

module.exports = router;