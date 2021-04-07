const Game = require('../game').Game;
const core = require('../core');

describe('king attack', () => {
  it('should return squares attack by king', () => {
    const g = new Game();
    g.init();
    const king = g.getPiece(core.FR.e1);
    expect(king.attack(g, core.FR.e1)).toEqual(new Set());
    g.move(core.FR.e2, core.FR.a6);
    expect(king.attack(g, core.FR.a6)).toEqual(
      new Set(['a5', 'a7', 'b6', 'b7', 'b5'])
    );
  });
});
