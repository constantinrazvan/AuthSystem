const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 9000;

mongoose.connect('mongodb://localhost:27017');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function() {
    console.log(`Server is running on ${port} port!`);
})


