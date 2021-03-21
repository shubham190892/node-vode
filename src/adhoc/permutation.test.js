const p = require('./permutation');

describe('permutation', () => {
    it('should return all the permutations', () => {
        const out = p.permute(['🐙', '🦋', '🐬', '🐥'])
        //console.log(out);
        const ans = [
            [ '🐙', '🦋', '🐬', '🐥' ],
            [ '🐙', '🦋', '🐥', '🐬' ],
            [ '🐙', '🐬', '🦋', '🐥' ],
            [ '🐙', '🐬', '🐥', '🦋' ],
            [ '🐙', '🐥', '🦋', '🐬' ],
            [ '🐙', '🐥', '🐬', '🦋' ],
            [ '🦋', '🐙', '🐬', '🐥' ],
            [ '🦋', '🐙', '🐥', '🐬' ],
            [ '🦋', '🐬', '🐙', '🐥' ],
            [ '🦋', '🐬', '🐥', '🐙' ],
            [ '🦋', '🐥', '🐙', '🐬' ],
            [ '🦋', '🐥', '🐬', '🐙' ],
            [ '🐬', '🐙', '🦋', '🐥' ],
            [ '🐬', '🐙', '🐥', '🦋' ],
            [ '🐬', '🦋', '🐙', '🐥' ],
            [ '🐬', '🦋', '🐥', '🐙' ],
            [ '🐬', '🐥', '🐙', '🦋' ],
            [ '🐬', '🐥', '🦋', '🐙' ],
            [ '🐥', '🐙', '🦋', '🐬' ],
            [ '🐥', '🐙', '🐬', '🦋' ],
            [ '🐥', '🦋', '🐙', '🐬' ],
            [ '🐥', '🦋', '🐬', '🐙' ],
            [ '🐥', '🐬', '🐙', '🦋' ],
            [ '🐥', '🐬', '🦋', '🐙' ]
        ];
        expect(out).toStrictEqual(ans);
    });
});