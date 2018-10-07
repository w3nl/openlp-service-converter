var ScheduleConverter = require('../src/index.js');

new ScheduleConverter({
    input:    'test.osz',
    output:   'output',
    logLevel: 2
})
    .wait()
    .then(data => {
        data.forEach(entry => {
            console.log('entries', entry.failed, entry.success, entry.files, entry.time);
        });
    });
