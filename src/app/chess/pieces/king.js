const Piece = require('./piece').Piece;
const core = require('../core');

const directions = [
  {rj: 1, cj: 1},
  {rj: -1, cj: -1},
  {rj: 1, cj: -1},
  {rj: -1, cj: 1},
  {rj: 1, cj: 0},
  {rj: 0, cj: 1},
  {rj: -1, cj: 0},
  {rj: 0, cj: -1}
];

class King extends Piece {
  constructor(color) {
    super(color, 'King', 'K');
  }
  attack(game, source) {
    const squares = new Set();
    for (const d of directions) {
      const target = core.jump(game, source, d);
      if (target != null) squares.add(target.fr);
    }
    return squares;
  }
  getLegalMoves(game, source) {
    // return this.attack(game, source);
  }
}

module.exports = {
  King: King
};
