const Game = require('../game').Game;
const core = require('../core');

describe('attack', () => {
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
