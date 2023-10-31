const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

const loginUser = async (request, res) => {
  const { email, password } = request.body;

  try {
    // Validações
    if (!email || !password) {
      return res
        .status(422)
        .json({ msg: "Complete corretamente o email e senha" });
    }

    // Checar se o usuário existe
    const user = await pool.query(
      "SELECT id, email, password FROM users WHERE email = $1;",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    const { id, email: userEmail, password: hashedPassword } = user.rows[0];

    // Verificar a senha
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ msg: "Senha Inválida inválida" });
    }

    res.status(200).json({ msg: "Autenticação realizada com sucesso", id: id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Aconteceu um erro no servidor" });
  }
};

module.exports = loginUser;
