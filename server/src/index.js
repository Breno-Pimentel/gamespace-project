const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ override: true });

// Database initialization
const { startDatabase, createGamesTable, createGamespaceTable } = require("./database");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const routes = require("./routes/routes");
app.use(routes);

// Start server
const port = process.env.PORT || 3000;

startDatabase()
  .then(() => createGamesTable())
  .then(() => createGamespaceTable())
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error starting server:", error);
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