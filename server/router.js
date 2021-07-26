const express = require("express")
const router = express.Router()
const {
  home,
  getAllAthletes,
  currentAthlete
} = require("./controllers/athletController")

router.get("/", home)
router.get("/athletes", getAllAthletes)
router.get("/athlete/^id", currentAthlete)

module.exports = router