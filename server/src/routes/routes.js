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
