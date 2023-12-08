/*

// routes.js
const { Router } = require("express");
const router = Router();
const cors = require("cors");

// Importando o middleware de upload
const upload = require("../middleware/MulterMiddleware");

// Importando as funções da classe Controller
const {
  getUsers,
  createUser,
  getUserByID,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const {
  getGames,
  createGame,
  getGameByID,
} = require("../controller/gameController");
const loginUser = require("../controller/LoginController");

// Rotas Públicas
router.get("/users", getUsers);
router.post("/auth/register", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/auth/login", loginUser);

router.get("/games", getGames);
router.get("/game/:id", getGameByID);
router.post("/upload", upload.single("img"), (req, res) => {
  // Lógica para tratar o upload da imagem
  res.json({ message: "Image uploaded successfully", filename: req.file.filename });
});
router.post("/create/game", createGame);

// Rotas Privadas
router.get("/user/:id", getUserByID);

// Exportando o método router para fora do arquivo
module.exports = router;
*/

const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config({ override: true });
const startDatabase = require("./database/userDatabase");
const createGamesTable = require("./database/gamesDatabase");
const createGamespaceTable = require("./database/gamespaceDatabase");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use(require("./routes/routes"));

// Exemplo de uso do Axios para fazer uma requisição GET
app.get("/api/users/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.example.com/users/${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).send(error.response.data);
  }
});

// Implementação adicional
// - Você pode adicionar interceptores de requisições e respostas para tarefas como:
//     - Adicionar um cabeçalho de autorização a todas as requisições
//     - Logar as requisições e respostas
//     - Tratar erros de rede de forma centralizada

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
