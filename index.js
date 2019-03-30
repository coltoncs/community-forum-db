const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('heres the db');
})

const port = process.env.PORT || 4444;
app.listen(port);