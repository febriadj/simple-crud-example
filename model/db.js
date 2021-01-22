const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

db.connect(err => {
  if (err) console.log(err)!
  console.log('mysql connected');
});

modular.exports = db;
