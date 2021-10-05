const express = require('express');

const router = express.Router();
let taskArray = ["1", "2", "3", "4"];

module.exports = router;

//Create task
router.route('/').post((req, res) => {
    const task = req.body.taskToAdd;
    taskArray.push({
        '_id': taskArray.length + 1,
        'task': task,
        'createAt': Date.now(),
        'lastUpdate': Date.now(),
    })
    res.status(201).send({
        'success': true,
        'message': "Task created",
        'data': []
    });
    console.log(taskArray);
})

//Get all tasks
router.route('/').get((req, res) => {

    res.status(201).send({
        'success': true,
        'data': []
    });
})

//Delete task
router.route('/:id').delete((req, res) => {
    const idToUpdate = req.params.id.slice(1);
    taskArray.splice(idToUpdate, 1);
    res.send({
        'success': true,
        'message': "Task deleted",
        'data': taskArray
    });
})

//Update task
router.route('/:id').put((req, res) => {
    const idToUpdate = req.params.id.slice(1);
    taskArray[idToUpdate] = req.body.taskToUpdate;
    res.send({
        'success': true,
        'message': "Task updated",
        'data': taskArray
    });




})