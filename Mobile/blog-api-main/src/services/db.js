const mysql = require('mysql2/promise');

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
    });

    console.log('Banco de dados conectado.');
    global.dbConnection = connection;
  } catch (err) {
    console.log('Erro ao conectar Banco de dados: ' + err);
  }
}

connect();

module.exports = {};
