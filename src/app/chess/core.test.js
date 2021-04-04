const rewire = require('rewire');
const c = require('./core');
const r_c = rewire('./core');

const Game = require('./game').Game;

describe('Index', () => {
    it('fromTable', () => {
        let idx = c.Index.fromTable(0, 0);
        expect(idx).toEqual({r: 0, c: 0, fr: 'a8'});
        idx = c.Index.fromTable(0, 7);
        expect(idx).toEqual({r: 0, c: 7, fr: 'h8'})
    });

    it('fromChess', () => {
        let idx = c.Index.fromChess('a8');
        expect(idx).toEqual({r: 0, c: 0, fr: 'a8'});
        idx = c.Index.fromChess('h8');
        expect(idx).toEqual({r: 0, c: 7, fr: 'h8'})
    });
});

describe('scan', () => {
    it('should ', () => {
        const g = new Game();
        let out = c.scan(g, {white:['K'], black:['Q', 'R']});
        expect(out).toEqual({white: {squares: {}}, black: {squares: {}}});
        g.init();
        out = c.scan(g, {white:['K'], black:['Q', 'R']});
        let ans = {
            "black": {
                "King": "e8",
                "squares": {"a8": "R", "d8": "Q", "h8": "R"}
            },
            "white": {
                "King": "e1",
                "squares": {}
            }
        };
        expect(out).toEqual(ans);
    });
});

describe('walk', () => {
    const walk = r_c.__get__('walk');
    const e4 = c.Index.fromChess('e4');
    const e2 = c.Index.fromChess('e2');
    it('empty board', () => {
        const g = new Game();
        const g1 = new Game();
        g1.init();
        g.setPiece(g1.getPiece(e2), e4);
        let squares = walk(g, e4, 1, 0);
        expect(squares).toEqual(['e3', 'e2', 'e1']);
        squares = walk(g, e4, 0, 1);
        expect(squares).toEqual(['f4', 'g4', 'h4']);
        squares = walk(g, e4, -1, 0);
        expect(squares).toEqual(['e5', 'e6', 'e7', 'e8']);
        squares = walk(g, e4, 0, -1);
        expect(squares).toEqual(['d4', 'c4', 'b4', 'a4']);

        squares = walk(g, e4, 1, 1);
        expect(squares).toEqual(['f3', 'g2', 'h1']);
        squares = walk(g, e4, -1, -1);
        expect(squares).toEqual(['d5', 'c6', 'b7', 'a8']);
        squares = walk(g, e4, 1, -1);
        expect(squares).toEqual(['d3', 'c2', 'b1']);
        squares = walk(g, e4, -1, 1);
        expect(squares).toEqual(['f5', 'g6', 'h7']);
    });

    it('board with pieces', function () {
        const g = new Game();
        g.init();
        g.clone(e2, e4);
        let squares = walk(g, e4, 1, 0);
        expect(squares).toEqual(['e3']);
        squares = walk(g, e4, -1, -1);
        expect(squares).toEqual(['d5', 'c6', 'b7']);
    });

});

describe('walkStraight', () => {
    const d4 = c.Index.fromChess('d4');
    const d2 = c.Index.fromChess('d2');
    it('board with pieces', () => {
        const g = new Game();
        g.init();
        g.clone(d2, d4);
        let squares = c.walkStraight(g, d4);
        expect(squares).toEqual(["d5", "d6", "d7", "d3", "c4", "b4", "a4", "e4", "f4", "g4", "h4"]);
    });
});

describe('walkDiagonal', () => {
    const f4 = c.Index.fromChess('f4');
    const f2 = c.Index.fromChess('f2');
    it('board with pieces', () => {
        const g = new Game();
        g.init();
        g.clone(f2, f4);
        let squares = c.walkDiagonal(g, f4);
        expect(squares).toEqual(['e5','d6','c7','e3','g5','h6','g3']);
    });
});