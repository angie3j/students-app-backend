const express = require('express');
const controller = express.Router();

const { repeatNTimesWithSpace, capitalizeFirstLetter } = require('../utils/stringUtils');

// browser: localhost:9000/names/capitalizeName/harry // => Harry 
controller.get('/capitalizeName/:name', (request, response) => {
    try {
        // get one
        const name = request.params.name
        console.log(name) // 

        // get result of repeatNTimesWithSpace 
        const capitalizedName = capitalizeFirstLetter(name);

        // send string response of result
        response.send(capitalizedName);

    } catch (error) {
        response.send('There was an error')
    }

})

// browser: localhost:9000/names/john/4 // => john john john john 
controller.get('/:name/:times', (request, response) => {
    try {
        // get one
        const name = request.params.name
        // get times
        const times = request.params.times

        // get result of repeatNTimesWithSpace 
        const repeatedNames = repeatNTimesWithSpace(name, times);

        // send string response of result
        response.send(repeatedNames);

    } catch (error) {
        response.send('There was an error')
    }

})


module.exports = controller;
