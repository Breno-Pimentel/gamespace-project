// routes.js
import { Router } from "express";
import axios from "axios";
import upload from "../middleware/MulterMiddleware.js";
import {
  getUsers,
  createUser,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controller/userController.js";
import { getGames, createGame, getGameByID } from "../controller/gameController.js";
import loginUser from "../controller/LoginController.js";

const router = Router();

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

// Rotas Privadas
router.get("/user/:id", async (req, res) => {
  try {
    // Utilizando Axios para enviar a requisição GET
    const response = await axios.get(`/api/users/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).send(error.response.data);
  }
});

// Rotas usando Axios
router.post("/create/game", async (req, res) => {
  try {
    // Utilizando Axios para enviar a requisição POST
    const response = await axios.post("/api/games", req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).send(error.response.data);
  }
});

export default router;






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