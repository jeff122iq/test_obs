const { Athlete } = require("../db/models");


exports.home = (req, res) => {
  res.send("<h1>Home</h1>")
}

exports.getAllAthletes = (req, res) => {
  const athlete = Athlete.findAll()
  res.json({athlete})
}