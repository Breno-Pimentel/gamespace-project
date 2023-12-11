const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

const createPlataformTBScript = `CREATE TABLE IF NOT EXISTS "plataform" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL
);`;

const createPlataformTable = async () => {
  try {
    let tableVerify = await pool.query(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE LOWER(TABLE_NAME) = LOWER('plataform')"
    );
    if (tableVerify.rows.length === 0) {
      await pool.query(createPlataformTBScript);
      console.log("Plataform table created successfully");
    }
  } catch (error) {
    console.error("error creating plataform table", error);
  }
};

createPlataformTable();

module.exports = { createPlataformTable };
