const { Pool } = require("pg");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
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
const createGame = async (request, res, next) => {
  const {
    name,
    plataform,
    genre,
    releaseYear,
    language,
    gameStatus,
    resource,
    img
  } = request.body;

  // Lidando com o upload de imagem usando o multer
  const image = upload.single("image")(request, res, next); // Passe a função 'next' aqui

  if (!image) {
    return res.status(422).json({ msg: "Preencha corretamente os campos" });
  }

  const response = await pool.query(
    "INSERT INTO games (name, plataform, game_genres, game_release_year, game_language, game_status,game_resource, game_image) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
    [
      name,
      plataform,
      genre,
      releaseYear,
      language,
      gameStatus,
      resource,
      image.filename, // Salvar o nome do arquivo da imagem no banco de dados
      img.filename
    ]
  );

  console.log(response);
  res.json({
    message: "Jogo adicionado com sucesso",
    body: {
      game: {
        name,
        plataform,
        genre,
        releaseYear,
        language,
        gameStatus,
        resource,
        image: image.filename, // Incluir o nome do arquivo da imagem na resposta
        img: img.filename
      },
    },
  });
};

const deletGame = async (request, res) => {
  const id = request.params.id;
  const response = await pool.query("DELET FROM games WHERE id = $1", [id]);
  res.json(`Game: ${id} deleted successfully`);
};

module.exports = { getGames, getGameByID, createGame, deletGame };
