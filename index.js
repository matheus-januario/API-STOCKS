// importing packages
const express = require('express');
const app = express();

// import function getAllStocks
const getAllStocks = require('./middlewares/getAllStocks');

// middlewares
app.use(express.json());

// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

app.get('/stocks', getAllStocks);
