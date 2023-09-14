const { Pool } = require("pg");

//instanciando a classe pool com as configurações de conexão do banco de dados postgresql
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_MAIN_NAME,
});
//Metodo para pegar todos os usuários do banco de dados
const getUsers = async (request, res) => {
  const response = await pool.query("SELECT * FROM users");
  console.log(response.rows);
  res.status(200).json(response.rows);
};
//Método para pegar um usuário do banco de ddados a partir do seu id
const getUserByID = async (request, res) => {
  const id = request.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(response.rows);
};
//Método para criar um usuário e escreve-lo no banco de dados
const createUser = async (request, res) => {
  const { name, email, password } = request.body;
  const response = await pool.query(
    "INSERT INTO users (name, email, password) VALUES($1, $2, $3)",
    [name, email, password]
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
