const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    res.render('index');
  })

router.use((req, res, next) => {
  res.send('404 Not Found');
});

module.exports = router;
