const express = require("express");
const routes = require("./routes/routes.js");
const app = express();
const cors=require("cors");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use(routes);

// Exemplo de uso do Axios para fazer uma requisição GET

// Interceptor de requisições


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