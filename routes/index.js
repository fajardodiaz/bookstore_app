var express = require('express');
const { getHome, getProjects, getAbout } = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/', getHome );

/* GET projects page. */
router.get('/projects', getProjects);

/* GET about page. */
router.get('/about', getAbout);

module.exports = router;
