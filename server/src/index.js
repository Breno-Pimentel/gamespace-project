const request = require('request');

const app = express();

app.get('/', (req, res) => {
  // Declaração da variável "request"
  let request;

  // Inicialização da variável "request"
  request = require('request');

  request('http://example.com', (err, res, body) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(body);
    }
  });
});

app.listen(3000);



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

