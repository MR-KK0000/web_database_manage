var mysql = require('mysql')
var util = require('util')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: '',
    database: 'tqf'
})

pool.query = util.promisify(pool.query)

module.exports = pool;