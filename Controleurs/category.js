let categoryArray = ["Iphone", "Samsung", "BlackBerry", "Sony"];

//@desc    crée une categorie
//@route   POST /category
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


//@desc     retourne toutes les categories
//@route    GET /category
//@access   Public
exports.getCategory = ((req, res) => {
    res.status(201).send({
        'success': true,
        'data': categoryArray
    });
});


//@desc     supprime une categorie
//@route    DELETE /category/id
//@access   Public
exports.deleteCategory = ((req, res) => {
    const idToDelete = req.params.id;
    categoryArray.splice(idToDelete, 1);
    res.status(201).send({
        'success': true,
        'message': "Category deleted",
        'data': categoryArray
    });
});


//@desc     MODIFIE une categorie
//@route    PUT /category/id
//@access   Public
exports.updateCategory = ((req, res) => {
    const idToUpdate = req.params.id;
    categoryArray[idToUpdate] = req.body.categoryToUpdate;
    res.status(200).send({
        'success': true,
        'message': "Category updated",
        'Category list lastUpdate': Date.now(),
        'data': categoryArray
    });
});