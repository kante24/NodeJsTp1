const { find, findById, create } = require("../models/task");
const Task = require("../models/task");


//@desc     crée une tâche
//@route    POST/task
//@access   Public
exports.createTask = (async(req, res) => {
    //La tâche à ajouter dépuis le body parser
    const taskToAdd = req.body.taskToAdd;
    //La tâche qui vient d'être ajoutée
    const taskAdded = await Task.create({ task: taskToAdd });
    //Response to the client
    res.status(200).send({
        'success': true,
        'message': "Task created",
        'data': taskAdded
    });
});


//@desc     retourne toutes les tâches
//@route    GET/task
//@access   Public
exports.getTask = (async(req, res) => {
    const tasks = await Task.find();
    res.status(201).send({
        'success': true,
        'data': tasks
    });
});


//@desc     supprime une tâche
//@route    DELETE/task
//@access   Public
exports.deleteTask = (async(req, res) => {
    const idToDelete = req.params.id;
    try {
        await Task.findByIdAndUpdate(idToDelete, {
            lastUpdate: Date.now(),
            isAlive: false
        })
    } catch (error) {
        console.log('Err findByIdAndUpdate ' + error)
    }
    res.status(200).send({
        'success': true,
        'message': "Task deleted"
    });
});


//@desc     MODIFIE une tâche
//@route    PUT/task
//@access   Public
//methode await
exports.updateTask = (async(req, res) => {
    const idToUpdate = req.params.id;
    taskToUpdate = req.body.taskToUpdate;
    let task;
    try {
        await Task.findByIdAndUpdate(idToUpdate, {
            task: taskToUpdate,
            lastUpdate: Date.now()
        })
    } catch (error) {
        console.log('Err findByIdAndUpdate ' + error)
    }
    try {
        //Pour afficher element après modification
        task = await Task.findById(idToUpdate)
    } catch (error) {
        console.log('Err  findById' + error)
    }

    res.status(200).send({
        'success': true,
        'message': "Task updated",
        'Task lastUpdate': Date.now(),
        'data': task
    });
});