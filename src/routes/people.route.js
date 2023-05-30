const { Router } = require("express");
const { getAllPeople } = require("../controllers/people.controller");

// * Variables
const router = Router();

// * Direccionamiento
router.get("/api/people", getAllPeople);

module.exports = router;