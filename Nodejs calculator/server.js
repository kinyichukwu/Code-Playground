const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const x = Number(req.body.num1);
  const y = Number(req.body.num2);
  const z = x + y;
  res.send('Your result is : ' + z);
});

app.listen(3000, () => {
  console.log('blabka');
});
