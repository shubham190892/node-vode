const Game = require('../game').Game;
const core = require('../core');
const FR = core.FR;

describe('pawn attack', () => {
  it('should return pawn attacking squares', () => {
    const g = new Game();
    g.init();
    let p = g.getPiece(core.FR['e2']);
    let out = p.attack(g, core.FR['e2']);
    expect(out).toEqual(new Set(['d3', 'f3']));

    p = g.getPiece(core.FR['h2']);
    out = p.attack(g, core.FR['h2']);
    expect(out).toEqual(new Set(['g3']));

    g.move(core.FR['e2'], core.FR['e6']);
    p = g.getPiece(core.FR['e6']);
    out = p.attack(g, core.FR['e6']);
    expect(out).toEqual(new Set(['d7', 'f7']));
  });
});


describe('getLegalMoves', () => {
  it('should return all legal squares for a pawn', () => {
    const g = new Game();
    g.init();
    let p = g.getPiece(core.FR['e2']);
    let out = p.getLegalMoves(g, core.FR['e2']);
    expect(out).toEqual(new Set(['e3', 'e4']));
    g.turn = 1;
    p = g.getPiece(core.FR['e7']);
    out = p.getLegalMoves(g, core.FR['e7']);
    expect(out).toEqual(new Set(['e5', 'e6']));

    g.init();
    g.move(core.FR.a8, core.FR.d3);
    p = g.getPiece(core.FR['e2']);
    out = p.getLegalMoves(g, core.FR['e2']);
    expect(out).toEqual(new Set(['e3', 'e4', 'd3']));
  });

  it('en passant', () => {
    const g = new Game();
    g.init();
    g.move(core.FR.e2, core.FR.e5);
    g.turn = 1;
    g.history.push(new core.Move(g, FR.d7, g.getPiece(FR.d7), FR.d5, null));
    g.move(FR.d7, FR.d5);
    g.turn = 0;
    let p = g.getPiece(core.FR['e5']);
    let out = p.getLegalMoves(g, core.FR['e5']);
    expect(out).toEqual(new Set(['d6', 'e6']));
  });
});