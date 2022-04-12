var express = require('express');
var router = express.Router();

// Pool to use the  database
const db = require('../models/index');

//Connections
// db.execute('SELECT * FROM book')
// .then((result)=>{
//   console.log(result[0]);
// })
// .catch((err)=> console.log(err));


/* GET users listing. */
router.get('/', (req, res, next)=>{
  db.execute('SELECT * FROM book')
  .then((result)=>{
      books_list = result[0];
      res.render('books/books_list', {books: books_list});
  })
  .catch((err)=> console.log(err));
});

/* Add a Book */
router.get('/add-book', function(req, res, next){
  res.render('books/add_book');
});

router.post('/add-book',(req, res, next)=>{
  console.log(req.body);
  book_list.push(req.body)
  res.redirect('/books');
})

module.exports = router;
