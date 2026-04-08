const express = require("express")
const router = express.Router()

const PessoasController = require("../controllers/PessoasController")

router.post("/pessoas",PessoasController.create)
router.get("/pessoas",PessoasController.getAll)

module.exports = router
