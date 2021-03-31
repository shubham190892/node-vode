const i11 = require('./index-1st-1');

describe('find', () => {
    it('should return the search index', () => {
        expect(i11.solve('')).toBe(-1);
        expect(i11.solve('00000000')).toBe(-1);
        expect(i11.solve('1111111')).toBe(0);
        expect(i11.solve('00001111111')).toBe(4);
    });

    it('text 0001', function () {
        expect(i11.solve('0001')).toBe(3);
    });

});