const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ debug: true });

//instanciando a classe pool com as configurações de conexão do banco de dados postgresql
const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

console.log(process.env.DB_USER);
//Metodo para pegar todos os usuários do banco de dados
const getPlataform = async (request, res) => {
  const response = await pool.query("SELECT plataform FROM users");
  console.log(response.rows);
  res.status(200).json(response.rows);
};

//Método para criar um usuário e escreve-lo no banco de dados
const createPlataform = async (request, res) => {
  const {plataform} = request.body;
 
  //Checando se o usúario exixiste
  const plataformExist = await pool.query("SELECT * FROM plataforms WHERE name = $1;", [
    plataform,
  ]);
  if (plataformExist.rows.length === 1) {
    return res
      .status(422)
      .json({ msg: "Plataforma já está em uso, por favor, coloque outro!" });
  }
 
  const response = await pool.query(
    "INSERT INTO plataforms (name)",
    [plataform]
  );
  console.log(response);

  res.json({
    message: "plataform Added successfully",
    body: {
      plataform: { plataform },
    },
  });
};
//Método para deletar o usuário do banco de dados
const deletePlataform = async (request, res) => {
  const {plataform} = request.body;
  const response = await pool.query("DELETE FROM plataforms WHERE name = $1", [plataform]);
  res.json(`User ${plataform} deleted successfully`);
};
//Atualizar as informações do usuário no banco de dados
const updatePlataform = async (request, res) => {
  const { name } = request.body;
  const response = await pool.query(
    "UPDATE plataforms SET name = $1",
    [name]
  );
  res.json("User updated successfully");
};

//exportando os métodos para fora do arquivo
module.exports = {
  getPlataform,
  createPlataform,
  deletePlataform,
  updatePlataform
};
