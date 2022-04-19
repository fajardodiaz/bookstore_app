var express = require('express');
const { getAuthors, getAddAuthor, addAuthor, getAuthorByID } = require('../controllers/authors');
var router = express.Router();

//GET DATA
router.get('/', getAuthors);

//Add Author
router.get('/add-author',getAddAuthor);
router.post('/add-author', addAuthor)

// Get Author By ID
router.get('/:id', getAuthorByID);

module.exports = router;