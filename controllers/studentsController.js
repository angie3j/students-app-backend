// const { response } = require('express');
const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');

controller.get('/', (request, response) => {

    // how do i handle a query string? 
    let { limit=25 } = request.query; // '10'
    // convert string to number: 
    limit = Number(limit)
    // console.log(limit); // 10

    // how do I change the student data according to the limit? 
    // studentData.students = [ 25 items]
    // studentData.students = studentData.students.slice(0, limit)
    let studentDataForDelivery = {...studentData};
    studentDataForDelivery.students = studentDataForDelivery.students.slice(0, limit);
    // response.send('Hello from the students controller')
    // response.json({hello: "world"})
    response.json({studentData})

});

// create a controller to handle a get request, a get for a specific 
// student. First, we have to turn this id into something we could use 
// const studentId = request.params.id;
// It is not an async because we're currently working from a static file,
// we'll switch to an async solution once we write our database
controller.get('/:id', (request, response) => {
    try{ 
        const studentId = request.params.id;
        // regex: you always start with 2 //. Ex: let regexp = /abc/; console.log(regexp.test('abc'));
        // let regexp = /[a-z]{3}/; console.log(regexp.test('aaa')); // true
        // console.log(regexp.test('a11')); // not true
        // if the studentId is NOT a number 0-9, send the message
        if(!/[0-9]/.test(studentId)){
            response.send('Student id must be a number')
            return; 
        }
        // studentData comes from line 4 (our studentData json file on the root level),
        // studentData has a key of students and an array of student objects. 
        // studentData.students is already an array; find() is an array method, looking
        // at each student in turn. Returning the one where student.id = studentId.
        const singleStudent = studentData.students.find(student => {
            // the "id" on the object is a string, and line 18 "const studentId = request.params.id;" 
            // is also a string.
            return student.id === studentId;
        });
        
        if(singleStudent) {
            response.json(singleStudent);
        } else {
            response.send('Student not found');
        }
        // We need to think about how to handle an error to avoid website from crashing:
    } catch (error) {
        response.status(500).send("An error occurred")
  }
})



module.exports = controller; 