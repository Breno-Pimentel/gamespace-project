const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

const createGameTBScript = `CREATE TABLE IF NOT EXISTS "games" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "plataform" VARCHAR(55) NOT NULL,
    "game_genres" VARCHAR(100) NOT NULL,
    "game_release_year" INTEGER NOT NULL,
    "game_language" VARCHAR(55) NOT NULL,
    "game_status" VARCHAR(55) NOT NULL,
    "game_resource" VARCHAR(55) NOT NULL,
    "game_image" BYTEA
);`;

const createGamesTable = async () => {
  try {
    let tableVerify = await pool.query(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE LOWER(TABLE_NAME) = LOWER('games')"
    );
    if (tableVerify.rows.length === 0) {
      await pool.query(createGameTBScript);
      console.log("Game table created successfully");
    }
  } catch (error) {
    console.error("error creating game table", error);
  }
};

createGamesTable();

module.exports = { createGamesTable };
