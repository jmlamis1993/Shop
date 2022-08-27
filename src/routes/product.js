const { Router, request } = require('express');
const router = Router();
//const _ = require('underscore');

const data = require('../product.json');

//Products
router.get('/', (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json(data);
});

//Products By Category
router.get('/:id', (req, res) => {
    const result = [];
    data.forEach(element => {
        if (element.category_id == req.params.id){
            result.push(element);
        }
    });
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json(result);
});

module.exports = router;