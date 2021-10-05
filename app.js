const express = require('express');


const PORT = 5000;
const app = express();
const task = require("./Routes/task");

app.listen(PORT, () => {
    console.log('App listening on port : ' + PORT);
});

app.get('/', (req, res) => {
    res.send("Initial point");
});

app.use(express.json());

app.use('/task', task);