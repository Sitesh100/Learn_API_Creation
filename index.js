const express = require('express');
const { PORT } = require('./Config/server.config');

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})