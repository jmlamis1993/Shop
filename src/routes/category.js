const { Router, request } = require('express');
const router = Router();
//const _ = require('underscore');

const data = require('../category.json');

//Categories
router.get('/', (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json(data);
});

module.exports = router;