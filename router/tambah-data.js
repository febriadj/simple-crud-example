const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', (req, res, next) => {
  res.render('tambah-data');
});

router.post('/', (req, res, next) => {
  const { nim, nama, email, fakultas } = req.body;
  let sql = `INSERT INTO mahasiswa VALUES ( '${nim}', '${nama}', '${email}', '${fakultas}' )`;
  db.query(sql, (err, result, fields) => {
    if (err) console.log(err);

    res.redirect('/');
  })
})

module.exports = router;