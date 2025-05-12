const express = require('express');
const router = express.Router();
const path = require('path');

//definimos las rutas y los manejadores

router.get("/", (req, res)=>{
    //res.send("Hola mundo");
    res.sendFile(path.join(__dirname+"/../index.html"));
});

module.exports = router;