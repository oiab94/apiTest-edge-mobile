const { Router } = require("express");
const { 
	getAllPeople, 
	getPeopleById } = require("../controllers/people.controller");

// * Variables
const router = Router();

// * Direccionamiento
router.get("/api/people", getAllPeople);
router.get("/api/people/:id", getPeopleById);

module.exports = router;