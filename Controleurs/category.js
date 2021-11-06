const { find, findById, create } = require("../models/task");
const Category = require("../models/category");

//@desc    crée une categorie
//@route   POST /category
//@access  Public
exports.createCategory = (async(req, res) => {
    //La tâche à ajouter dépuis le body parser
    const categoryToAdd = req.body.categoryToAdd;
    //La tâche qui vient d'être ajoutée
    const categoryAdded = await Category.create({ category: categoryToAdd });
    //Response to the client
    res.status(200).send({
        'success': true,
        'message': "Task created",
        'data': categoryAdded
    });
});


//@desc     retourne toutes les categories
//@route    GET /category
//@access   Public
exports.getCategory = (async(req, res) => {
    const categories = await Category.find();
    res.status(201).send({
        'success': true,
        'data': categories
    });
});


//@desc     supprime une categorie
//@route    DELETE /category/id
//@access   Public
exports.deleteCategory = (async(req, res) => {
    const idToDelete = req.params.id;
    try {
        await Category.findByIdAndUpdate(idToDelete, {
            lastUpdate: Date.now(),
            isAlive: false
        })
    } catch (error) {
        console.log('Err findByIdAndUpdate ' + error)
    }
    res.status(200).send({
        'success': true,
        'message': "Category deleted"
    });
});


//@desc     MODIFIE une categorie
//@route    PUT /category/id
//@access   Public
exports.updateCategory = (async(req, res) => {
    const idToUpdate = req.params.id;
    categoryToUpdate = req.body.categoryToUpdate;
    let category;
    try {
        await Category.findByIdAndUpdate(idToUpdate, {
            category: categoryToUpdate,
            lastUpdate: Date.now()
        })
    } catch (error) {
        console.log('Err findByIdAndUpdate ' + error)
    }
    try {
        //Pour afficher element après modification
        category = await Category.findById(idToUpdate)
    } catch (error) {
        console.log('Err  findById' + error)
    }

    res.status(200).send({
        'success': true,
        'message': "cCtegory updated",
        'Category lastUpdate': Date.now(),
        'data': category
    });
});