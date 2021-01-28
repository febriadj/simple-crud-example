const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_project'
});

let createTable = `CREATE TABLE IF NOT EXISTS mahasiswa(
                    nim VARCHAR(225) PRIMARY KEY,
                    nama VARCHAR(225),
                    email VARCHAR(225),
                    fakultas VARCHAR(225)
                  )`;

db.query(createTable, (err, result) => {
  if (err) console.log(err);
})

db.connect(err => {
  if (err) console.log(err);
  console.log('mysql connected');
});

module.exports = db;
