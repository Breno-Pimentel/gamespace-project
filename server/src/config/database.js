const { Pool, Client } = require('pg');

 const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '240403breno',
    port: 5432
})

//Função para conectar o banco de daddos
const execute = async (query) => {

    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();
    }
}
//Constante responsável por injetar o script sql no postgres
const text = `
CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);`;

//Executando o metodo passando a const text como parametro
execute(text).then(result => {
    if(result) {
        console.log('Table created');
}})

//exportando o metodo pool para fora do arquivo
module.exports = pool;