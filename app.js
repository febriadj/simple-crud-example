const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on 127.0.0.0:${port}`);
});