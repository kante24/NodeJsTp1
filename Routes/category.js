const express = require('express');

const router = express.Router();

module.exports = router;

//Lien vers controleurs
const { createCategory, getCategory, deleteCategory, updateCategory } = require('../Controleurs/category');

router.route('/')
    .get(getCategory)
    .post(createCategory);

router.route('/:id')
    .delete(deleteCategory)
    .put(updateCategory);