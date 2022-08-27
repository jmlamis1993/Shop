const { Router, request } = require('express');
const router = Router();
//const _ = require('underscore');

const data = require('../sales.json');

//Sales By Filters
router.get('/', (req, res) => {
    var bycat = [];
    var byprod = [];
    var result = [];
    const categoryId = req.query.categoryId;
    const productId = req.query.productId;
    const modelId = req.query.modelId;
    if (categoryId > 0){
        data.forEach(element => {
            if (element.category_id == categoryId){
                bycat.push(element);
            }
        });

    }
    else{
        bycat = data;
    }

    if (productId > 0){
        bycat.forEach(element => {
            if (element.product_id == productId){
                byprod.push(element);
            }
        });
    }
    else{
        byprod = bycat;
    }
    if (modelId > 0){
        byprod.forEach(element => {
            if (element.model_id == modelId){
                result.push(element);
            }
        });
    }
    else{
        result = byprod;
    }
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json(result);
});

module.exports = router;