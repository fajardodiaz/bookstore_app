var express = require('express');
var router = express.Router();

// Pool to use the  database
const db = require('../models/index');

let authors_list;

//GET DATA
router.get('/', (req, res, next) => {
    db.execute('SELECT * FROM author')
        .then((result) => {
            authors_list = result[0];
            res.render('authors/authors_list', {
                authors: authors_list
            });
        })
        .catch((err) => console.log(err));
});


router.get('/add-author', (req, res, next) => {
    res.render('authors/add_author');
})

router.post('/add-author', (req, res, next) => {
    let {
        firstname,
        lastname,
        birth,
        death
    } = req.body;
    db.execute(`INSERT INTO author(firstname, lastname, birth, death) VALUES('${firstname}',' ${lastname}', '${birth}','${death}' )`)
        .then(() => {
            res.redirect('/authors');
        })
        .catch((err) => console.log(err));
})

module.exports = router;