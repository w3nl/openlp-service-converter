var ScheduleConverter = require('../src/index.js');

new ScheduleConverter({
    input:    'test.osz',
    output:   'output',
    logLevel: 2
})
    .wait()
    .then(data => {
        data.forEach(entry => {
            if (entry.type == 'service') {
                console.log('service', entry.file);
            } else if (entry.type == 'image') {
                console.log('image', entry.file);
            } else if (entry.type == 'presentation') {
                console.log('presentation', entry.file, entry.sheets.failed, entry.sheets.success, entry.sheets.files, entry.sheets.time);
            }
        });
    });
