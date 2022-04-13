var express = require('express');
var router = express.Router();

// Pool to use the  database
const db = require('../models/index');

let genres_list;

//GET DATA
router.get('/', (req, res, next)=>{
    db.execute('SELECT * FROM genre')
    .then((result)=>{
        genres_list = result[0];
        res.render('genres/genres_list', {genres: genres_list});
    })
    .catch((err)=> console.log(err));
});


/* Add a GENRE */
router.get('/add-genre', (req, res, next) => {
    res.render('genres/add_genre');
})

router.post('/add-genre', (req, res, next) => {
    let {
        name
    } = req.body;
    db.execute(`INSERT INTO genre(name) VALUES('${name}')`)
        .then(() => {
            res.redirect('/genres');
        })
        .catch((err) => console.log(err));
})



module.exports = router;
