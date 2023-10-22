const jwt = require("jsonwebtoken");
const Pool = require("pg");

const checkToken = async (req, response, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret =
      "HDLOIUYBFRCXZ12343HUIOBASCBKPL2IOKJOJI5J6L6790451964UISACBHY$#";
    jwt.verify(token, secret);

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return response.status(401).json({ msg: "Token inválido" });
    } else if (error.name === "TokenExpiredError") {
      return response.status(401).json({ msg: "Token expirado" });
    } else {
      return response.status(500).json({ msg: "Erro interno do servidor" });
    }
  }
};

module.exports = checkToken;
