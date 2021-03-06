// Pool to use the  database
const db = require('../models/index');

/* GET books listing. */
exports.getBooks = (req, res, next) => {
    db.execute('SELECT * FROM book')
        .then((result) => {
            books_list = result[0];
            res.render('books/books_list', {
                books: books_list
            });
        })
        .catch((err) => console.log(err));
};

/* Add a Book */

exports.getAddBook = (req, res, next) => {
    db.execute('SELECT * from genre')
        .then((genreresponse) => {
            genreOp = genreresponse[0];
            db.execute('SELECT * from author')
                .then((authresponse) => {
                    authorOp = authresponse[0];
                    res.render('books/add_book', {
                        authors: authorOp,
                        genres: genreOp
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));

};

exports.addBook = (req, res, next) => {
    console.log(req.body);
    res.redirect('/books');
};