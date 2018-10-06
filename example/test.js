var ScheduleConverter = require('../src/index.js');

new ScheduleConverter({
    input:    'test.osz',
    output:   'output',
    logLevel: 2
}).run();
