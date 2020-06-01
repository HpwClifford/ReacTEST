const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../src')));

app.post('/receive', (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

app.listen(port, () => console.log(`server listening on port  ${port}`));

module.exports = app;
