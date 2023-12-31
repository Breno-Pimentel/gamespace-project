// gameController.js
const { Pool } = require("pg");
const multerMiddleware = require("../middleware/MulterMiddleware");
const {getUploadedFileName } = require('../middleware/MulterMiddleware');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

const getGames = async (request, res) => {
  const response = await pool.query("SELECT * FROM games");
  console.log(response.rows);
  res.status(200).json(response.rows);
};

const getGameByID = async (request, res) => {
  const id = request.params.id;
  const response = await pool.query(
    "SELECT id, name FROM games WHERE id = $1",
    [id]
  );
  if (response.rows.length === 0) {
    return res.status(404).json({ msg: "Game not found" });
  }
  res.json(response.rows);
};

const createGame = async (request, res) => {
  try {
    const {
      name,
      plataform,
      genre,
      releaseYear,
      language,
      gameStatus,
      resource,
    } = request.body;
    
    // Obtenha o caminho da imagem a partir do middleware
    const image = `uploads/${getUploadedFileName()}`

    if (!name) {
      return res.status(422).json({ msg: "Complete corretamente os campos" });
    }

    const response = await pool.query(
      "INSERT INTO games (name, plataform, game_genres, game_release_year, game_language, game_status,game_resource, game_image) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
      [name, plataform, genre, releaseYear, language, gameStatus, resource, image]
    );

    console.log(response);
    res.json({
      message: "Game added successfully",
      body: {
        game: {
          name,
          plataform,
          genre,
          releaseYear,
          language,
          gameStatus,
          resource,
          image,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteGame = async (request, res) => {
  const id = request.params.id;
  const response = await pool.query("DELETE FROM games WHERE id = $1", [id]);
  res.json(`Game: ${id} deleted successfully`);
};

module.exports = { getGames, getGameByID, createGame, deleteGame };