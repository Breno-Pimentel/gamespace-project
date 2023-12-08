const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const startDatabase = require("./database/userDatabase");
const createGamesTable = require("./database/gamesDatabase");
const createGamespaceTable = require("./database/gamespaceDatabase");

dotenv.config({ override: true });

// Constantes
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use(require("./routes/routes"));

// Inicialização do servidor
app.listen(PORT, HOST, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
  }
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
app.use(cors());
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