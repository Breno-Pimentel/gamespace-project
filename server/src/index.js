const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ override: true });
const startDatabase = require("./config/database");

//middlewares - faz referencias a funcoes que são passads antes da rota
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//rotas
app.use(require("./routes/routes"));

app.listen(process.env.PORT);
console.log("listening on port 3000");
console.log("Server is running ok");
