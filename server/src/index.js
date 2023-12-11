const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ override: true });
const startDatabase = require("./database/userDatabase");
const createGamesTable = require("./database/gamesDatabase");
const createGamespaceTable = require("./database/gamespaceDatabase");
const createPlataformTable = require("./database/plataformDatabase")

//middlewares - faz referencias a funcoes que são passadas antes da rota
app.use(cors({
  origins: ["http://www.prestecinfo.com.br", "http://www.prestecinfo.com.br"],
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

//rotas
app.use(require("./routes/routes"));

app.listen(3000);
console.log("listening on port 3001");
console.log("Server is running ok");
//Breno é um lindão que joga duro na kofre futuro engenheiro
//Roque barrigudo
//Roque, o serasa me ligou hoje


