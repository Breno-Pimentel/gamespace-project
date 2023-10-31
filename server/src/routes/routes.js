const { Router } = require("express");
const router = Router();
const cors = require("cors");

//Importando as funções da classe Controller
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

//Rotas Públicas
router.get("/users", getUsers);
router.post("/auth/register", createUser);
// router.get("/users/:id", getUserByID);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/auth/login", loginUser);

router.get("/games", getGames);
router.get("/game/:id", getGameByID);
router.post("/create/game", createGame);

//Rotas Privadas
router.get("/user/:id", getUserByID); //Falta o metodo de busca por id

//Exportando o metodo router para fora do arquivo
module.exports = router;
