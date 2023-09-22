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
  loginUser,
  checkToken,
} = require("../controller/userController");

//Rotas Públicas
router.get("/users", getUsers);
router.post("/auth/register", createUser);
router.get("/users/:id", getUserByID);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/auth/login", loginUser);

//Rotas Privadas
router.get("/user/:id", checkToken); //Falta o metodo de busca por id

//Exportando o metodo router para fora do arquivo
module.exports = router;
