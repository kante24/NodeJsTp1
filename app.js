const express = require('express');


const PORT = 5000;
const app = express();

app.listen(PORT, () => {
    console.log('App listening on port : ' + PORT);
});


// Routes

//Tâches
const task = require("./Routes/task");
app.use('/task', task);

//Catégories
const category = require("./Routes/category");
app.use('/category', category);



app.get('/', (req, res) => {
    res.send("Initial point");
});

app.use(express.json());