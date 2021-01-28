const express = require('express');
const router = express.Router();
const db = require('../model/db');

router.route('/')
  .get((req, res, next) => {
    res.render('index');
  })

router.use((req, res, next) => {
  res.send('404 Not Found');
});

module.exports = router;
