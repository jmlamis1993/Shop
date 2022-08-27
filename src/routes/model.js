const { Router, request } = require('express');
const router = Router();
//const _ = require('underscore');

const data = require('../model.json');

//Models
router.get('/', (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json(data);
});

//Models By Products
router.get('/:id', (req, res) => {
    const result = [];
    data.forEach(element => {
        if (element.product_id == req.params.id){
            result.push(element);
        }
    });
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json(result);
});
module.exports = router;