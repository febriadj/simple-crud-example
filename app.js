const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(require('./router/route'));

const port = 3000;
app.listen(port, () => {
  console.log(`listening on 127.0.0.0:${port}`);
});