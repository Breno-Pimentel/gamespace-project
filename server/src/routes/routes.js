// routes.js
const { Router } = require("express");
const router = Router();
const cors = require("cors");

// Importando o middleware de upload
const {upload} = require("../middleware/MulterMiddleware");
const {getUploadedFileName } = require('../middleware/MulterMiddleware');

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
const getImageGameByID = require("../controller/imageController")
const {getPlataform, createPlataform, deletePlataform, updatePlataform} = require("../controller/plataformController");

// Rotas Públicas Usuários
router.get("/users", getUsers);
router.post("/auth/register", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/auth/login", loginUser);
// Rotas Jogos
router.get("/games", getGames);
router.get("/game/:id", getGameByID);
// Rota da imagem
router.post("/upload", upload.single("img"), (req, res) => {
  // Lógica para tratar o upload da imagem
  res.json({ message: "Image uploaded successfully", filename: req.file.filename });
});
//router.get("/getImage:game_image", getImageGameByID);
//Rota Criação de Jogo
router.post("/create/game", createGame);

// Rotas Privadas
router.get("/user/:id", getUserByID);


//Rotas do adm
router.get("/plataforms", getPlataform)
router.post("/create/plataform", createPlataform)
router.delete("/delete/plataform:name", deletePlataform)
router.put("/create/plataform", updatePlataform)

// Exportando o método router para fora do arquivo
module.exports = router;
