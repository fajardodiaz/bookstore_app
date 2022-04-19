const express = require('express');
const { getBooks, getAddBook, addBook } = require('../controllers/books');
const router = express.Router();

/* GET books listing. */
router.get('/', getBooks);

/* Add a Book */
router.get('/add-book',getAddBook);
router.post('/add-book',addBook);

module.exports = router;