
const should = require('should');
const el = require('../index.js');

describe('File reader', () => {
    it('should return true if all brackets in the file look like {...} or (...) or [...]', () => {
        const elem = el.fileReader('{()}()[]');
        should(elem).be.eql(true);
    });
    it('should return false if brackets in the file do not look like {...} or (...) or [...]', () => {
        const elem = el.fileReader('([(,[)],}kjkhjvgh}}}}');
        should(elem).be.eql(false);
    });
});
