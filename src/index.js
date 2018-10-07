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

        this.promise = false;
        this.resolve = null;
        this.reject = null;

        this.files = [];
        this.data = [];

        this.version = '0.2.2';
    }

    /**
     * With this function, you can use the promise function.
     *
     * @return {object}
     */
    wait() {
        let promise;

        this.promise = true;

        promise = new Promise(this.run.bind(this));

        return promise;
    }

    /**
     * Start the script.
     *
     * @param {object} resolve
     * @param {object} reject
     *
     * @return {object}
     */
    run(resolve, reject) {
        if (resolve && this.promise == true) {
            this.resolve = resolve;
        }

        if (reject && this.promise == true) {
            this.reject = reject;
        }

        this.start();

        return this;
    }

    /**
     * Start the script.
     */
    start() {
        if (!this.input) {
            return;
        }

        this.read();
        this.extract();
        this.finish();
    }

    /**
     * Read the service zip.
     */
    read() {
        this.unzipParser = unzip.Parse();

        fs.createReadStream(this.input).pipe(this.unzipParser);
    }

    /**
     * Extract the service zip.
     */
    extract() {
        let component = this;

        unzip.Extract({
            path: this.output
        });

        this.unzipParser
            .on('entry', entry => {
                component.files.push(entry.path);
            });
    }

    /**
     * Finish the converter.
     */
    finish() {
        this.unzipParser.on('close', () => {
            this.convert();
        });
    }

    /**
     * Convert the powerpoint presentations to png files.
     */
    convert() {
        let component = this;
        let promises = this.files.map(entry => {
            return this.findPresentations.call(component, entry);
        });

        Promise.all(promises).then(() => {
            this.resolve(component.data);
        });
    }

    /**
     * Find the presentations.
     *
     * @param {object} entry
     *
     * @return {Promise}
     */
    findPresentations(entry) {
        let component = this;

        const fileName = entry;

        if (path.parse(fileName).ext == '.ppt' || path.parse(fileName).ext == '.pptx') {
            return new Promise(function(resolve) {
                new Converter({
                    files:         ['./' + component.output + '/' + fileName],
                    output:        component.output + '/',
                    invert:        false,
                    deletePdfFile: true,
                    outputType:    'png',
                    logLevel:      component.logLevel
                })
                    .wait()
                    .then(data => {
                        component.data.push({
                            type:   'presentation',
                            file:   fileName,
                            sheets: data
                        });
                        resolve({
                            type:   'presentation',
                            file:   fileName,
                            sheets: data
                        });
                    });
            });
        }

        if (path.parse(fileName).ext == '.osj') {
            return new Promise(function(resolve) {
                component.data.push({
                    type: 'service',
                    file: fileName
                });
                resolve({
                    type: 'service',
                    file: fileName
                });
            });
        }

        if (path.parse(fileName).ext == '.jpg' || path.parse(fileName).ext == '.png') {
            return new Promise(function(resolve) {
                component.data.push({
                    type: 'image',
                    file: fileName
                });
                resolve({
                    type: 'image',
                    file: fileName
                });
            });
        }

        new Promise(function(resolve) {
            resolve(null);
        });
    }
}

module.exports = ScheduleConverter;
