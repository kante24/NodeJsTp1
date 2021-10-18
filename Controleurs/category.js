let categoryArray = ["Iphone", "Samsung", "BlackBerry", "Sony"];

//@desc    crée une categorie
//@route   POST/category
//@access  Public
exports.createCategory = ((req, res) => {
    const category = req.body.categoryToAdd;
    categoryArray.push({
        '_id': categoryArray.length + 1,
        'category': category,
        'createAt': Date.now(),
        'lastUpdate': Date.now(),
    })
    res.status(200).send({
        'success': true,
        'message': "Category created",
        'data': categoryArray
    });
});


//@desc     retourne une categorie
//@route    GET/category
//@access   Public
exports.getCategory = ((req, res) => {
    res.status(201).send({
        'success': true,
        'data': categoryArray
    });
});


//@desc     supprime une categorie
//@route    DELETE/category
//@access   Public
exports.deleteCategory = ((req, res) => {
    const idToDelete = req.params.id.slice(1);
    categoryArray.splice(idToDelete, 1);
    res.send({
        'success': true,
        'message': "Category deleted",
        'data': categoryArray
    });
});


//@desc     MODIFIE une categorie
//@route    PUT/category
//@access   Public
exports.updateCategory = ((req, res) => {
    const idToUpdate = req.params.id.slice(1);
    categoryArray[idToUpdate] = req.body.categoryToUpdate;
    res.send({
        'success': true,
        'message': "Task updated",
        'data': categoryArray
    });
});