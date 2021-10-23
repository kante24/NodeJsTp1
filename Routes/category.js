const express = require('express');

const router = express.Router();

module.exports = router;

//Lien vers le controleur
const { createCategory, getCategory, deleteCategory, updateCategory } = require('../Controleurs/category');

//Crontrol pour afficher les categories et créer une nouvelle categorie
router.route('/')
    .get(getCategory)
    .post(createCategory);

//Crontrol pour supprimer une categorie et modifer une categorie à partir de la position de cette categorie
router.route('/:id')
    .delete(deleteCategory)
    .put(updateCategory);