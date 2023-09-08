const express = require('express');
const cors = require('cors');
const app = express();



//middlewares - faz referencias a funcoes que são passads antes da rota
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//rotas
app.use(require('./routes/routes'))


app.listen(3000);
console.log('listening on port 3000');