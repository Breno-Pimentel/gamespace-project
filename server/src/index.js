const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ override: true });
const startDatabase = require("./database/database");

//middlewares - faz referencias a funcoes que são passadas antes da rota
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//rotas
app.use(require("./routes/routes"));

app.listen(process.env.PORT);
console.log("listening on port 3000");
console.log("Server is running ok");


