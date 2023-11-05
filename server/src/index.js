const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ override: true });
const startDatabase = require("./database/database");
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
