const core = require('../core');
const Piece = require('./piece').Piece;

class Bishop extends Piece {
  constructor(color) {
    super(color, 'Bishop', 'B');
  }

  attack(game, source) {
    return new Set(core.walkDiagonal(game, source));
  }

  getLegalMoves(game, source) {
    return this.attack(game, source);
  }
}

module.exports = {
  Bishop: Bishop
};
