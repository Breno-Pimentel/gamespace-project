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
const https = require("https");
const fs = require("fs");
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

// Carregar as chaves e certificados SSL
const privateKey = fs.readFileSync('/etc/letsencrypt/live/prestecinfo.com.br/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/prestecinfo.com.br/fullchain.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Criar servidor HTTPS
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, () => {
  console.log("HTTPS server is listening on port 3000");
  console.log("Server is running ok");
});
