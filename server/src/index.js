const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

// Configuração do dotenv para carregar as variáveis de ambiente do arquivo .env
dotenv.config({ path: "./env" });

// Constantes
const PORT = process.env.NODE_PORT || 3000;
const HOST = process.env.HOST || "localhost";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importação das funções relacionadas ao banco de dados
const startDatabase = require("./database/userDatabase");
const createGamesTable = require("./database/gamesDatabase");
const createGamespaceTable = require("./database/gamespaceDatabase");

// Rotas
const routes = require("./routes/routes");
app.use(routes);

// Inicialização do servidor após a inicialização do banco de dados
startDatabase()
  .then(() => createGamesTable())
  .then(() => createGamespaceTable())
  .then(() => {
    app.listen(PORT, HOST, (error) => {
      if (error) {
        console.error("Erro ao iniciar o servidor:", error);
      } else {
        console.log(`Servidor rodando em http://${HOST}:${PORT}`);
      }
    });
  })
  .catch((error) => {
    console.error("Erro ao iniciar o servidor:", error);
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