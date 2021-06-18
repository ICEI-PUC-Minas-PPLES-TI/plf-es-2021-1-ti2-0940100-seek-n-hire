const mysql = require('mysql2');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database: 'trabalho',
  port: 3306,
});

connection.connect(err => {
  let message = !err ? 'connected' : 'connection failed';
  console.log('mysql: ' + message);
});

module.exports = connection
