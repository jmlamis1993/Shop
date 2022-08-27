const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {  
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);  
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})
 
module.exports = router;