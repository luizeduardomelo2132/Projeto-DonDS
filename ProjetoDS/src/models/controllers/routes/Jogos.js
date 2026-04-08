const express = require("express")
const router = express.Router()

const JogosController = require("../controllers/jogosController")

router.post("/jogos",JogosController.create)
router.get("/jogos",JogosController.getAll)
router.get("/jogos/:id",JogosController.getById)
router.put("/jogos/:id",JogosController.update)
router.delete("/jogos/:id",JogosController.delete)

module.exports = router
