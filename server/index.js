const express = require('express')
const app = express()
const connectDB = require('./db')
const port = 8080;

app.get('/', (req, res) => {
    res.send("backend running on port 8080");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});