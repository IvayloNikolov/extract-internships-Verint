
var casper = require('casper').create();
var jobsDomain = 'https://www.jobs.bg/';
var queryStrings = 'front_job_search.php?distance=0&location_sid=&categories%5B%5D=15&all_type=0&all_position_level=1&all_company_type=1&keyword='
casper.start(jobsDomain + queryStrings);

casper.on('remote.message', function (msg) {
    console.log('remote message caught: ' + msg);
});

casper.then(function() {
    var jobsStringAll = this.evaluate(function(){
        var jobsNode = document.querySelectorAll('.offerslistRow a');
        var jobsString = '';
        var jobsArray = [].slice.call(jobsNode);
        jobsArray.map(function(obj){
            console.log(obj)
            jobsString += 12;
        })
        return jobsString;
    })
    //page.render('blabla.png')
    //console.log(jobsStringAll)
})

casper.run();

