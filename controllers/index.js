/* GET home page. */
exports.getHome = (req, res, next) => {
    res.render('index', {
        title: 'Bookstore App'
    });
};

/* GET projects page. */
exports.getProjects = (req, res, next) => {
    res.render('projects', {
        title: 'Projects Page'
    });
};

exports.getAbout = (req, res, next)=>{
    res.render('about', {
        title:"About Page"
    });
}