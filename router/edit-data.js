const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/:nim', async (req, res, next) => {
  let params = req.params.nim;
  let sql = await `SELECT * FROM mahasiswa WHERE nim = ?`;
  db.query(sql, [params], (err, result, fields) => {
    if (err) return next(err);
    
    res.render('edit-data', {
      data: result[0]
    });
  });
});

router.post('/:nim', async (req, res, next) => {
  const { nim, nama, email, fakultas } = req.body;
  let sql = await `UPDATE mahasiswa SET 
    nim      = '${nim}', 
    nama     = '${nama}', 
    email    = '${email}', 
    fakultas = '${fakultas}'
    WHERE nim = ${nim}
  `;
  db.query(sql, (err, result, fields) => {
    if (err) return next(err);

    res.redirect('/');
  })
})

module.exports = router;