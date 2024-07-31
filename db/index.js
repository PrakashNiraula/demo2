var mysql      = require('mysql');
const pool=mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'asdfghjkl',
    database : 'testdb' 
})
module.exports=pool;