var page = require('webpage').create();
const url = 'https://www.jobs.bg/front_job_search.php?distance=0&location_sid=&categories%5B%5D=15&job_type%5B%5D=4&all_position_level=1&all_company_type=1&keyword=';

page.open(url, function (status) {
    console.log(status);
    if(status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});

