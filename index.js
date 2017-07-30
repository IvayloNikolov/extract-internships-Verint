
var casper = require('casper').create();
var jobsDomain = 'https://www.jobs.bg/';
var queryStrings = 'front_job_search.php?distance=0&location_sid=&categories%5B%5D=15&all_type=0&all_position_level=1&all_company_type=1&keyword='
var jobsRowNodes;
casper.start(jobsDomain + queryStrings);

casper.on('remote.message', function (msg) {
    console.log(msg);
})

function getJobRows() {
    var jobsLinkNodes = document.querySelectorAll('.offerslistRow a.joblink');
    var jobsRowNodes = [];

    for (var i = 0; i < jobsLinkNodes.length; i++) {
        var currentRow = jobsLinkNodes[i].parentElement.parentElement;
        var job = currentRow.querySelector('.joblink').innerHTML;
        var employer = currentRow.querySelector('.company_link').innerHTML;
        jobsRowNodes.push({job: job, employer: employer});
    }
    return jobsRowNodes;
}

casper.then(function() {
    jobsRowNodes = this.evaluate(getJobRows);
}).then(function () {
    console.log(jobsRowNodes[1].job);
    console.log(jobsRowNodes[1].employer);
})

casper.run();

