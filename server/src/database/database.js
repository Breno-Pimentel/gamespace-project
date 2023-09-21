//Importando classes
const { Pool, Client } = require("pg");
const path = require("path");
require("dotenv").config({ debug: true });

//Pool inicial
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

//Scripts do banco de dados
const createDbScript = "CREATE DATABASE db_login_system";
const createTBScript = `CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(55) NOT NULL,
    "email" VARCHAR(55) UNIQUE NOT NULL,
    "password" VARCHAR(100) NOT NULL
);`;

//Função que cria o banco de daddos e a tabela do projeto(Utilizando verficações de existencia);
const startDatabase = async () => {
  //Try(tente executar isso) e catch(Caso não funcione retorne um erro) da função
  try {
    //Script de verificação da existencia do banco de dados
    let dataBaseVerify = await pool.query(
      "SELECT datname FROM pg_catalog.pg_database WHERE LOWER(pg_database.datname) = LOWER('db_login_system')"
    );
    //Condição para que o banco de dados seja criado
    if (dataBaseVerify.rows.length == 0) {
      await pool.query(createDbScript);
      console.info("Database created successfully");
    }
    //Pool principal, que se conecta ao banco de dados de usuários
    const mainPool = new Pool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_MAIN_NAME,
    });
    //Script de verificação da existencia da tabela 'users'
    let tableVerify = await pool.query(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE LOWER(TABLE_NAME) = LOWER('users')"
    );
    //Condição para que a tabela 'users' seja criada
    if (tableVerify.rows.length == 0) {
      await mainPool.query(createTBScript);
      console.info("Table created successfully");
    }
  } catch (error) {
    console.error("Error", error);
  }
};
//Execução da funcão
startDatabase();

//exportando o metodo pool para fora do arquivo
module.exports = { pool, startDatabase };
