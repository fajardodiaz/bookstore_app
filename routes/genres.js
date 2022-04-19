const express = require('express');
const { getGenres, getAddGenre, addGenre, getGenreByID} = require('../controllers/genres');
const router = express.Router();

//GET DATA
router.get('/', getGenres);

/* Add a GENRE - GET & POST */ 
router.get('/add-genre', getAddGenre);
router.post('/add-genre', addGenre);

/* GET Genre By ID */
router.get('/:id', getGenreByID);

module.exports = router;
