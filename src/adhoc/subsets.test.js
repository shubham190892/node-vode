const s = require('./subsets');

describe('subsets', () => {
    it('should return all possible subsets of a given set', () => {
        const out = s.solve([ '🐙', '🦋', '🐬', '🐥' ]);
        //console.log(out);
        const ans = [
            [],
            [ '🐙' ],
            [ '🦋' ],
            [ '🦋', '🐙' ],
            [ '🐬' ],
            [ '🐬', '🐙' ],
            [ '🐬', '🦋' ],
            [ '🐬', '🦋', '🐙' ],
            [ '🐥' ],
            [ '🐥', '🐙' ],
            [ '🐥', '🦋' ],
            [ '🐥', '🦋', '🐙' ],
            [ '🐥', '🐬' ],
            [ '🐥', '🐬', '🐙' ],
            [ '🐥', '🐬', '🦋' ],
            [ '🐥', '🐬', '🦋', '🐙' ]
        ];
        expect(out).toStrictEqual(ans);
    });
});