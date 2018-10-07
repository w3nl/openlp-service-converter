# openlp-service-converter
Convert a OpenLP service.
Extract the zip.
Convert powerpoint to png.

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Requirements

The package requires the following software to be installed:

* LibreOffice-dev
* ImageMagick
* pdfinfo

## Installation

    npm install openlp-service-converter

Debian/Ubuntu:

    sudo apt install libreoffice-dev imagemagick poppler-utils


## Basic Usage

```
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
            } else if (entry.type == 'presentation') {
                console.log('presentation', entry.file, entry.sheets.failed, entry.sheets.success, entry.sheets.files, entry.sheets.time);
            }
        });
    });
```


input: Openlp service file.

output: Output folder.

logLevel: Set the log level, default is `1`.


```
[
    {
        type: 'service',
        file: 'test.osj'
    },
    {
        type: 'image',
        file: 'home/pieter/.local/share/openlp/servicemanager/Votum.jpg'
    },
    {
        type:   'presentation',
        file:   'home/pieter/.local/share/openlp/servicemanager/DocumentenGenesis12.pptx',
        sheets: {
            failed: [],
            success: [],
            files: [],
            time: 0
        }
    }
]
```

type: The file type, e.g. service, image, presentation.

file: The file name with relative path.

sheets: the sheet data.

failed: An array with objects for failed converting files (file, failure, error)

success: An array with objects for converted files (page, index, name, path).

files: An array with files send to the script.

time: The total time the script was running.


## Test the package.

```
npm test
```

This will run all the tests in the test folder with mocha.

If you only want to check the eslint rules, just run.

```
npm run lint
```


[downloads-image]: https://img.shields.io/npm/dm/openlp-service-converter.svg
[npm-url]: https://www.npmjs.com/package/openlp-service-converter
[npm-image]: https://img.shields.io/npm/v/openlp-service-converter.svg
[npm-stats]: https://npm-stat.com/charts.html?package=openlp-service-converter
[travis-url]: https://travis-ci.org/w3nl/openlp-service-converter
[travis-image]: https://img.shields.io/travis/w3nl/openlp-service-converter/master.svg
[coveralls-url]: https://coveralls.io/r/w3nl/openlp-service-converter
[coveralls-image]: https://img.shields.io/coveralls/w3nl/openlp-service-converter/master.svg
