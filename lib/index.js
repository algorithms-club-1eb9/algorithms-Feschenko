
    const binarySearch = require('./binary-search');
    const stack = require('./data-structures/stack');
    const queue = require('./data-structures/queue');
    const fs = require('fs');

    console.log('dirname =', __dirname);
    const text = fs.readFileSync(`${__dirname}/binary-search/index.js`).toString();
    console.log('text =', text);
    console.log('text.length =', text.length);

    const fileReader = require('./file-reader');
    const bubbleSort = require('./sorts/bubble-sort');
    const mergeSort = require('./sorts/merge-sort');
    const quickSort = require('./sorts/quick-sort');

    module.exports = {
        binarySearch,
        stack,
        queue,
        fileReader,
        bubbleSort,
        mergeSort,
        quickSort,
    };
    console.log(fileReader);
