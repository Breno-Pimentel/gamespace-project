const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE2,
  });


  const getImageGameByID = async (request, res) => {
    const game_image = request.params.game_image;
    const response = await pool.query(
      "SELECT game_image, name FROM games WHERE game_image = $1",
      [game_image]
    );
    if (response.rows.length === 0) {
      return res.status(404).json({ msg: "Game not found" });
    }
    res.json(response.rows);
  };

  module.exports = getImageGameByID