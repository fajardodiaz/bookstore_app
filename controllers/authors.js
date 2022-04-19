// Pool to use the  database
const db = require('../models/index');

//GET DATA
exports.getAuthors = (req, res, next) => {
    db.execute('SELECT * FROM author')
        .then((result) => {
            authors_list = result[0];
            res.render('authors/authors_list', {
                authors: authors_list
            });
        })
        .catch((err) => console.log(err));
};


exports.getAddAuthor = (req, res, next) => {
    res.render('authors/add_author');
};

exports.addAuthor = (req, res, next) => {
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
};

exports.getAuthorByID = (req, res, next)=>{
    let {id} = req.params; 
    db.execute(`SELECT * FROM author where id=${id}`)
    .then((result) => {
        authors_list = result[0];
        res.render('authors/authors_list', {
            authors: authors_list
        });
    })
    .catch((err) => console.log(err));
}