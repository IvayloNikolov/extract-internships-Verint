let mysql = require('promise-mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'job'
});

class Jobs{
    getAll(){
        return connection.then((conn)=>{
            return conn.query('SELECT * FROM jobs')
        })
    }
}
module.exports = Jobs