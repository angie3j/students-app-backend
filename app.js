const express = require('express');

const app = express();

const studentsController = require('./controllers/studentsController');

app.use('/students', studentsController);

app.get('/', (request, response) => {
    response.send("Hello World!")
})

module.exports = app; 