const rewire = require('rewire');
const Game = require('./game').Game;

const r_v = rewire('./validator');

describe('validateSource', () => {
    const validateSource = r_v.__get__('validateSource');
    const g = new Game();
    g.init();
    let out = {
        "code": "SOURCE_PIECE_NIL",
        "status": false
    };
    it('White\'s turn', () => {
        expect(validateSource(g, ['c4'])).toEqual(out);
        out.code = 'OPPONENT_PIECE_AT_SOURCE';
        expect(validateSource(g, ['e7'])).toEqual(out);
        out.status = true;
        out.code = '';
        expect(validateSource(g, ['e2'])).toEqual(out);
    });
    it('Black\'s turn', function () {
        g.turn = 1;
        out.status = false;
        out.code = 'OPPONENT_PIECE_AT_SOURCE';
        expect(validateSource(g, ['e2'])).toEqual(out);
    });
});

describe('validateTarget', () => {
    const validateTarget = r_v.__get__('validateTarget');
    const g = new Game();
    g.init();
    let out = {
        "code": "SELF_PIECE_AT_TARGET",
        "status": false
    };
    it('White\'s turn', () => {
        expect(validateTarget(g, ['', 'e1'])).toEqual(out);
        out.code = '';
        out.status = true;
        expect(validateTarget(g, ['', 'e7'])).toEqual(out);
        expect(validateTarget(g, ['', 'e4'])).toEqual(out);
        out.status = false;
        out.code = 'KING_AT_TARGET';
        expect(validateTarget(g, ['', 'e8'])).toEqual(out);
    });
    it('Black\'s turn', function () {
        g.turn = 1;
        out.status = false;
        out.code = 'SELF_PIECE_AT_TARGET';
        expect(validateTarget(g, ['', 'e7'])).toEqual(out);
    });
});

describe('validatePin', () => {
    it('Pin: True', () => {
        const validatePin = r_v.__get__('validatePin');

    });
});