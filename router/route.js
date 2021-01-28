const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', async (req, res, next) => {
  let sql = await `SELECT * FROM mahasiswa`;
  db.query(sql, (err, result, fields) => {
    if (err) return next(err);

    res.render('index', {
      datas: result
    });
  });
});

router.get('/:nim', (req, res, next) => {
  let params = req.params.nim;
  console.log(params);
  res.end();
})

router.use('/tambah-data', require('./tambah-data'));

router.use((req, res, next) => {
  res.send('404 Not Found');
});

module.exports = router;
