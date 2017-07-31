let mysql = require('promise-mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'job'
});

class Employers{
    getAll(){
        return connection.then((conn)=>{
            return conn.query('SELECT * FROM employers')
        })
    }
    create(employer){
        return connection.then((conn)=>{
            return conn.query(`INSERT INTO employers (name) VALUES ("${employer.name}")`)
        })
    }
}

module.exports = Employers;