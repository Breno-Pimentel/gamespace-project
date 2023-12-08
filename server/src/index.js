const express = require("express");
const axios = require("axios");
const routes = require("./routes/routes.js");
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
      `http://prestecinfo.com.br/users/${req.params.id}`,
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

// Interceptor de requisições
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.API_KEY}`;
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// Interceptor de respostas
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

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

