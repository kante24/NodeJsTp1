let taskArray = ["1", "2", "3", "4"];
//@desc    crée une tâche
//@route   POST/task
//@access  Public
exports.createTask = ((req, res) => {
    const task = req.body.taskToAdd;
    taskArray.push({
        '_id': taskArray.length + 1,
        'task': task,
        'createAt': Date.now(),
        'lastUpdate': Date.now(),
    })
    res.status(200).send({
        'success': true,
        'message': "Task created",
        'data': taskArray
    });
});


//@desc     retourne une tâche
//@route    GET/task
//@access   Public
exports.getTask = ((req, res) => {
    res.status(201).send({
        'success': true,
        'data': []
    });
});


//@desc     supprime une tâche
//@route    DELETE/task
//@access   Public
exports.deleteTask = ((req, res) => {
    const idToUpdate = req.params.id.slice(1);
    taskArray.splice(idToUpdate, 1);
    res.send({
        'success': true,
        'message': "Task deleted",
        'data': taskArray
    });
});


//@desc     MODIFIE une tâche
//@route    PUT/task
//@access   Public
exports.updateTask = ((req, res) => {
    const idToUpdate = req.params.id.slice(1);
    taskArray[idToUpdate] = req.body.taskToUpdate;
    res.send({
        'success': true,
        'message': "Task updated",
        'data': taskArray
    });
});