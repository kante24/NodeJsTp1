const express = require('express');

const router = express.Router();

module.exports = router;

//Lien vers controleurs
const { createTask, getTask, deleteTask, updateTask } = require('../Controleurs/task');

//Crontrol pour afficher les tâches et créer une nouvelle tâche
router.route('/')
    .get(getTask)
    .post(createTask);

//Crontrol pour supprimer une tâche et modifer une tâche à partir de la position de cette tâche
router.route('/:id')
    .delete(deleteTask)
    .put(updateTask);