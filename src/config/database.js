const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "postgres",
  port: 5432,
});

pool
  .query("SELECT * FROM user")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

pool.on("connect", () => {
  console.log("Base de dados conectada");
});

pool.on("error", (err) => {
  console.error("Erro na conexão com o banco de dados:", err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
