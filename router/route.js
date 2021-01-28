const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', (req, res, next) => {
  res.render('index');
})

router.use('/tambah-data', require('./tambah-data'));

router.use((req, res, next) => {
  res.send('404 Not Found');
});

module.exports = router;
