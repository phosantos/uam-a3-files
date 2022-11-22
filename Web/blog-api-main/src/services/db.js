const mysql = require('mysql2');

function connect() {
  try {
    const connection = mysql.createPool({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      connectionLimit: 10,
    });

    console.log('Banco de dados conectado.');
    global.dbConnection = connection.promise();
  } catch (err) {
    console.log('Erro ao conectar Banco de dados: ' + err);
  }
}

module.exports = connect();
