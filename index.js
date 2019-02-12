const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const address = 'localhost:5000';

app.use(bodyParser());

let link = {
  link: "awesome.ru"
}

app.use(express.static(__dirname + '/frontend/dist'));
app.get('/', (req, res) => res.render('index'));

app.get('/link', (req, res) => {
  res.send(link);
});

app.post('/setlink', (req, res) => {
  console.log(req.body.link);
  link.link = req.body.link;

  res.send("good");
});

app.listen(port, address, () => console.log(`Example app listening on port ${port}!`));