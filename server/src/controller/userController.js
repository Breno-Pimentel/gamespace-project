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
const getUsers = async (request, res) => {
  const response = await pool.query("SELECT * FROM users");
  console.log(response.rows);
  res.status(200).json(response.rows);
};
//Método para pegar um usuário do banco de ddados a partir do seu id
const getUserByID = async (request, res) => {
  const id = request.params.id;
  const response = await pool.query(
    "SELECT id,name,email FROM users WHERE id = $1 ",
    [id]
  );
  //Validação da existência do usúario
  if (response.rowCount === 0) {
    return res.status(404).json({ msg: "Usuário não encotrado" });
  }
  res.json(response.rows);
};

//Método para criar um usuário e escreve-lo no banco de dados
const createUser = async (request, res) => {
  const { name, email, password } = request.body;
  //Validações
  if (!name) {
    return res.status(422).json({ msg: "Complete corretamente o nome" });
  }
  if (!email) {
    return res.status(422).json({ msg: "Complete corretamente o email" });
  }
  if (!password) {
    return res.status(422).json({ msg: "Complete corretamente a senha" });
  }
  //Checando se o usúario exixiste
  const userExists = await pool.query("SELECT * FROM users WHERE email = $1;", [
    email,
  ]);
  if (userExists.rows.length === 1) {
    return res
      .status(422)
      .json({ msg: "Email já está em uso, por favor, coloque outro!" });
  }
  //Gerando senha encriptada
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const response = await pool.query(
    "INSERT INTO users (name, email, password) VALUES($1, $2, $3)",
    [name, email, passwordHash]
  );
  console.log(response);

  res.json({
    message: "User Added successfully",
    body: {
      user: { name, email, password },
    },
  });
};
//Método para deletar o usuário do banco de dados
const deleteUser = async (request, res) => {
  const id = request.params.id;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.json(`User ${id} deleted successfully`);
};
//Atualizar as informações do usuário no banco de dados
const updateUser = async (request, res) => {
  const id = request.params.id;
  const { name, email, password } = request.body;
  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2, password = $3, id = $4",
    [name, email, password, id]
  );
  res.json("User updated successfully");
};

//exportando os métodos para fora do arquivo
module.exports = {
  getUsers,
  getUserByID,
  createUser,
  deleteUser,
  updateUser,
};
