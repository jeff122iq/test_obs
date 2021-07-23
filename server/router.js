const express = require("express")
const router = express.Router()
const {home, getAllAthletes} = require("./controllers/athletController")

router.get("/", home)
router.get("/athletes", getAllAthletes)

module.exports = router