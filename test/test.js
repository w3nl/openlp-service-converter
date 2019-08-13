var assert = require('assert');
var ScheduleConverter = require('../src/index.js');

describe('openlp-service-converter', function() {
    it('Test', function(done) {
        new ScheduleConverter({
            input:    'test.osz',
            output:   'output',
            logLevel: 2
        })
            .wait()
            .then(() => {
                done();
            })
            .catch(() => {
                done('error');
            });
    }).timeout(15000);
});
