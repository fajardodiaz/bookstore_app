var express = require('express');
var router = express.Router();


book_list = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 2,
    title: "Asi hablo Zaratustra",
    author: "Friedrich Nitzsche",
  },
  {
    id: 3,
    title: "Damian",
    author: "George Orwell",
  },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('books_list', {books:book_list});
});

/* Add a Book */
router.get('/add-book', function(req, res, next){
  res.render('add_book');
});

router.post('/add-book',(req, res, next)=>{
  console.log(req.body);
  book_list.push(req.body)
  res.redirect('/books');
})

module.exports = router;
