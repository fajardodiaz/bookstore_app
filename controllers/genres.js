// Pool to use the  database
const db = require('../models/index');

//GET GENRES
exports.getGenres = (req, res, next) => {
    db.execute('SELECT * FROM genre')
        .then((result) => {
            genres_list = result[0];
            res.render('genres/genres_list', {
                genres: genres_list
            });
        })
        .catch((err) => console.log(err));
};


// /* Add a GENRE */
exports.getAddGenre = (req, res, next) => {
    res.render('genres/add_genre');
};

exports.addGenre = (req, res, next) => {
    let { name } = req.body;
    db.execute(`INSERT INTO genre(name) VALUES('${name}')`)
        .then(() => {
            res.redirect('/genres');
        })
        .catch((err) => console.log(err));
}

exports.getGenreByID = (req, res, next)=>{
    let {id} = req.params; 
    db.execute(`SELECT * FROM genre where id=${id}`)
    .then((result) => {
        genres_list = result[0];
        res.render('genres/genres_list', {
            genres: genres_list
        });
    })
    .catch((err) => console.log(err));
}