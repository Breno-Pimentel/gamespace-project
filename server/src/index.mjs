// src/index.mjs

import express from "express";
import axios from "axios";
import routes from "./routes/routes.js"; // Importe suas rotas como um módulo ES

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use(routes);

// Exemplo de uso do Axios para fazer uma requisição GET
app.get("/api/users/:id", async (req, res) => {
  try {
    // Utilizando Axios para enviar a requisição GET
    const response = await axios.get(
      `https://api.example.com/users/${req.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).send(error.response.data);
  }
});


// Implementação adicional
// - Você pode adicionar interceptores de requisições e respostas para tarefas como:
//   - Adicionar um cabeçalho de autorização a todas as requisições
//   - Logar as requisições e respostas
//   - Tratar erros de rede de forma centralizada

// Interceptor de requisições
app.use(axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.API_KEY}`;
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
));

// Interceptor de respostas
app.use(axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});




/*
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ override: true });
const startDatabase = require("./database/userDatabase");
const createGamesTable = require("./database/gamesDatabase");
const createGamespaceTable = require("./database/gamespaceDatabase");

//middlewares - faz referencias a funcoes que são passadas antes da rota
app.use(cors({
  origins: ["http://localhost", "https://localhost"],
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

//rotas
app.use(require("./routes/routes"));

app.listen(3000);
console.log("listening on port 3000");
console.log("Server is running ok");

//Breno é um lindão que joga duro na kofre futuro engenheiro
//Roque barrigudo
//Roque, o serasa me ligou hoje
*/

