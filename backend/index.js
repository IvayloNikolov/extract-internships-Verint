let express = require('express');
let app = express();
let port = process.env.PORT || 81;
let mysql = require('mysql');
let Jobs = require('./models/Jobs');
let Job = require('./models/Job');
let Employers = require('./models/Employers');
let Employer = require('./models/Employer');

app.get('/', function(req,res){
    Jobs.getAll()
    .then((jobs)=>{
        res.send(jobs);
    })

})
app.listen(port, function () {
    console.log(`I listen on ${port}`)
})