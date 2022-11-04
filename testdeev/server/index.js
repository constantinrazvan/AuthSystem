const express = require('express');

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function() {
    console.log(`Server is running on ${port} port!`);
})


