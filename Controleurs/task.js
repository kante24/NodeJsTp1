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
    //Repondre au client
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
    //id de la tâche à supprimer dépuis le lien
    const idToDelete = req.params.id;
    try {
        //Suppression de la tâche
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
exports.updateTask = (async(req, res) => {
    //id de la tâche à modifier dépuis le lien
    const idToUpdate = req.params.id;
    //Modification à apporter dépuis le body parser
    taskToUpdate = req.body.taskToUpdate;
    let task;
    try {
        //Modification de la tâche
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