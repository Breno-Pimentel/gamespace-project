const jwt = require("jsonwebtoken");
//Constante que armazena um middleware de check do token
const checkToken = (req, response, next) => {
  const authHeader = req.headers["authorization"];
  //Busca no header se existe a autorização e caso exista ele faz um split no array trazendo apenas o token
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.status(401).json({ msg: "Acesso negado" });
  }
  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    response.status(400).json({ msg: "Token inválido" });
  }
};

module.exports = checkToken;
