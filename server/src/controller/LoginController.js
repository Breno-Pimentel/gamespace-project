const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_MAIN_NAME,
});
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
      const getId = getIdQuery.rows.id;

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

module.exports = loginUser;
