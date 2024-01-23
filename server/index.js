const express = require('express')
const app = express()
const connectDB = require('./db')
const craftRoute = require('./routes/craftRoutes');
const port = 8080;

app.get('/', (req, res) => {
    res.send("backend running on port 8080");
});

connectDB();

app.use('/craft', craftRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});