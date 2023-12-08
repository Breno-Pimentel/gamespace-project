/* const express = require("express");
const cors = require("cors");
app.use(cors());
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
const express = require("express");
const cors = require("cors");
const app = express();

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:3000' // Substitua com a URL de origem do seu frontend se necessário
}));

// Carrega variáveis de ambiente
require("dotenv").config({ override: true });

// Conexão com o banco de dados
const startDatabase = require("./database/userDatabase");
const createGamesTable = require("./database/gamesDatabase");
const createGamespaceTable = require("./database/gamespaceDatabase");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use(require("./routes/routes"));

// Inicializando o servidor
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
  console.log("Server is running ok");
});
