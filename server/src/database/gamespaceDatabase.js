/*const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

const createGameSpaceTableScript = `CREATE TABLE IF NOT EXISTS "gamespace" (
    "gameID" INTEGER,
    "userID" INTEGER,
    FOREIGN KEY ("userID") REFERENCES "public"."users" ("id"),
    FOREIGN KEY ("gameID") REFERENCES "public"."games" ("id")
);`;

const createGamespaceTable = async () => {
  try {
    let tableVerify = await pool.query(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE LOWER(TABLE_NAME) = LOWER('gamespace')"
    );
    if (tableVerify.rows.length === 0) {
      await pool.query(createGameSpaceTableScript);
      console.log("Gamespace table created successfully");
    }
  } catch (error) {
    console.error("error creating gamespace table", error);
  }
};

createGamespaceTable();

module.exports = { createGamespaceTable };
*/

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER, // Alterado para evitar conflito com a variável USER do sistema
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE2,
});

const createGameSpaceTableScript = `CREATE TABLE IF NOT EXISTS "gamespace" (
    "gameID" INTEGER,
    "userID" INTEGER,
    FOREIGN KEY ("userID") REFERENCES "public"."users" ("id"),
    FOREIGN KEY ("gameID") REFERENCES "public"."games" ("id")
);`;

const verifyTableExistence = async (tableName) => {
  const queryResult = await pool.query(
    "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'public' AND LOWER(TABLE_NAME) = LOWER($1)",
    [tableName]
  );
  return queryResult.rows.length > 0;
};

const createGamespaceTable = async () => {
  try {
    const usersTableExists = await verifyTableExistence('users');
    const gamesTableExists = await verifyTableExistence('games');

    if (!usersTableExists || !gamesTableExists) {
      console.error('Required "users" or "games" table does not exist.');
      return;
    }

    const gamespaceTableExists = await verifyTableExistence('gamespace');
    if (!gamespaceTableExists) {
      await pool.query(createGameSpaceTableScript);
      console.log("Gamespace table created successfully");
    } else {
      console.log("Gamespace table already exists.");
    }
  } catch (error) {
    console.error("Error creating gamespace table", error);
  }
};

createGamespaceTable();

module.exports = { createGamespaceTable };