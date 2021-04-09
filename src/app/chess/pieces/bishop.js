const core = require('../core');
const Piece = require('./piece').Piece;

class Bishop extends Piece {
  constructor(color) {
    super(color, 'Bishop', 'B');
  }

  attack(game, source) {
    return new Set(core.walkDiagonal(game, source));
  }

  checkMoveLegal(game, source, target) {
    return this.attack(game, source).has(target.fr);
  }
}

module.exports = {
  Bishop: Bishop
};
