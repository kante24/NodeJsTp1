const { find, findById, create } = require("../models/task");
const Category = require("../models/category");

//@desc    crée une categorie
//@route   POST /category
//@access  Public
exports.createCategory = (async(req, res) => {
    //La categorie à ajouter dépuis le body parser
    const categoryToAdd = req.body.categoryToAdd;
    //La categorie qui vient d'être ajoutée
    const categoryAdded = await Category.create({ category: categoryToAdd });
    //Reponse au client
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
    //id de la categorie à supprimer dépuis le lien
    const idToDelete = req.params.id;
    try {
        //Suppression de la categorie
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
    //id de la categorie à supprimer dépuis le lien
    const idToUpdate = req.params.id;
    //Modification à apporter dépuis le body parser
    categoryToUpdate = req.body.categoryToUpdate;
    let category;
    try {
        //Modification de la categorie
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