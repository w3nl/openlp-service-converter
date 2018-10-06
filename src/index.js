const fs = require('fs');
const unzip = require('unzip');
const Converter = require('ppt-png');
const path = require('path');

/**
 * Convert a OpenLP service.
 */
class ScheduleConverter {
    /**
     * Setup the converter.
     *
     * @param {object} options
     */
    constructor(options) {
        this.input = options.input || null;
        this.output = options.output || 'output';

        this.logLevel = options.logLevel || 2;
    }

    /**
     * Start the script.
     */
    run() {
        if (!this.input) {
            return;
        }

        this.extract();
        this.convert();
    }

    /**
     * Extract the service zip.
     */
    extract() {
        fs.createReadStream(this.input)
            .pipe(unzip.Extract({
                path: this.output
            }));
    }

    /**
     * Convert the powerpoint presentations to png files.
     */
    convert() {
        const component = this;

        this.readStream = fs.createReadStream(this.input);
        this.readStream
            .pipe(unzip.Parse())
            .on('entry', function(entry) {
                const fileName = entry.path;

                if (path.parse(fileName).ext == '.ppt' || path.parse(fileName).ext == '.pptx') {
                    new Converter({
                        files:         ['./' + component.output + '/' + fileName],
                        output:        component.output + '/',
                        invert:        false,
                        deletePdfFile: true,
                        outputType:    'png',
                        logLevel:      component.logLevel
                    }).wait().then(function(data) {
                        console.log(data.failed, data.success, data.files, data.time);
                    });
                }
            });
    }
}

module.exports = ScheduleConverter;
