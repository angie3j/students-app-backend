const express = require('express');

const app = express();

const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController');


app.use('/students', studentsController);
app.use('/names', namesController);


app.get('/', (request, response) => {
    response.send("Hello World!")
})

module.exports = app; 