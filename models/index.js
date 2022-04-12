const mysql = require('mysql2');
const config = require('../config/database');

const pool = mysql.createPool({
    host: config.host,
    user: config.username,
    database: config.database,
    password: config.password,
});


module.exports = pool.promise();