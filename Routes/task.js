const express = require('express');

const router = express.Router();

module.exports = router;

//Lien vers controleurs
const { createTask, getTask, deleteTask, updateTask } = require('../Controleurs/task');

router.route('/')
    .get(getTask)
    .post(createTask);

router.route('/:id')
    .delete(deleteTask)
    .put(updateTask);