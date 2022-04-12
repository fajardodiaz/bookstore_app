var express = require('express');
var router = express.Router();

// Pool to use the  database
const db = require('../models/index');

let authors_list;

//GET DATA
router.get('/', (req, res, next)=>{
    db.execute('SELECT * FROM author')
    .then((result)=>{
        authors_list = result[0];
        res.render('authors/authors_list', {authors: authors_list});
    })
    .catch((err)=> console.log(err));
});


module.exports = router;
