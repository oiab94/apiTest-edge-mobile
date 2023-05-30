const { Router } = require("express");
const apiTest = require("../controllers/apiTest.controller");

// * Variables
const router = Router();

// * Direccionamiento
router.get("/", apiTest);

module.exports = router;