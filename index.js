let casper = require('casper').create();
let jobsRowNodes;


const jobsDomain = 'https://www.jobs.bg/';
const queryStrings = 'front_job_search.php?distance=0&location_sid=&categories%5B%5D=15&all_type=0&all_position_level=1&all_company_type=1&keyword=';

casper.start(jobsDomain + queryStrings);

casper.on('remote.message', function (msg) {
    console.log(msg);
});

function getJobRows() {
    let jobsLinkNodes = document.querySelectorAll('.offerslistRow a.joblink');
    let jobsRowNodes = [];
    console.log(jobsLinkNodes.length);
    for(let i=0; i<jobsLinkNodes.length;i++){
        let currentRow = jobsLinkNodes[i].parentElement.parentElement;
        let position = currentRow.querySelector('.joblink').innerHTML;
        let employer = currentRow.querySelector('.company_link').innerHTML;

        jobsRowNodes.push({
            employer: employer,
            position: position,
            date: Date.now()
        });
    }
    return jobsRowNodes;
}

casper.then(function() {
    jobsRowNodes = this.evaluate(getJobRows);
}).then(function () {
    jobsRowNodes.map((jobRowNode)=>{
        console.log('Employer:', jobRowNode.employer);
        console.log('Position:',jobRowNode.position);
        console.log('------------------------');
    })
});

casper.run();

