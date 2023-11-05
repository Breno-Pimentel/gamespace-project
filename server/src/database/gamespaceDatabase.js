const { Pool } = require("pg");

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
