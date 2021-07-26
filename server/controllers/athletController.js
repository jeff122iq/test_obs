const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./ocs_athletes.db');
console.log("DB", db)


exports.home = (req, res) => {
  res.send("<h1>Home</h1>")
}

exports.getAllAthletes = (req, res) => {
  try {
    let sql = `SELECT DISTINCT Game.game_id, year, city, A.athlete_id, name
               FROM Game
                   LEFT JOIN AthleteResult AR on Game.game_id
                   LEFT JOIN Athlete A on A.athlete_id = AR.game_id
               ORDER BY year, city, name;
    `;


    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      const response = rows.reduce((acc, row) => {
        const names = rows.reduce((accum, curr) => {
          if (curr.year === row.year && curr.city === row.city ) accum.push({athlete_id: curr.athlete_id, name: curr.name});
          return accum
        }, [])
        if (!acc.find((el) => el.city === row.city)) {
          acc.push({
            city: row.city,
            year: row.year,
            names
          })
        }

        return acc;
      }, []);
      res.status(200).json({response})
    });
  } catch (e) {
    res.status(400).json({message: e})
  }
}

exports.currentAthlete = (req, res) => {

}