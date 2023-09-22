const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
const loginUser = async (request, res) => {
  const { email, password } = request.body;

  //Validações
  if (!email) {
    return res.status(422).json({ msg: "Complete corretamente o email" });
  }
  if (!password) {
    return res.status(422).json({ msg: "Complete corretamente a senha" });
  }
  //Checar se o usuário existe
  const user = await pool.query("SELECT * FROM users WHERE email = $1;", [
    email,
  ]);
  if (user.rows.length === 0) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
  //checar se a senha combina com a senha do banco
  const checkPassword = async () => {
    //Pegando senha do banco de dados
    const getPasswordQuery = await pool.query(
      "SELECT password FROM users WHERE email = $1;",
      [email]
    );
    //Atribuindo e filtrando a resposta do query
    const getPassword = getPasswordQuery.rows[0].password;
    //Checando se a senha do banco é igual a senha criptografada
    const checkPassword = await bcrypt.compare(password, getPassword);
    //Validação (Senha inválida)
    if (!checkPassword) {
      return res.status(404).json({ msg: "Senha inválida" });
    }
    try {
      const getIdQuery = await pool.query(
        "SELECT id from users WHERE email = $1",
        [email]
      );
      const getId = getIdQuery.rows;
      console.log(getId);
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: getId,
        },
        secret
      );
      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token });
    } catch (error) {
      console.log(error);

      res.status(500).json({ msg: "Aconteceu um erro no servidor" });
    }
  };
  checkPassword();
};
const checkToken = (req, response, next) => {
  const authHeader = req.headers["Authorization"];
  //Busca no header se existe a autorização e caso exista ele faz um split no array trazendo apenas o token
  const token = authHeader && authHeader.split(" ")[1];
  console.log;

  if (!token) {
    return response.status(401).json({ msg: "Acesso negado" });
  }
};

//exportando os métodos para fora do arquivo
module.exports = {
  getUsers,
  getUserByID,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  checkToken,
};
