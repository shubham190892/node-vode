const Piece = require('./piece').Piece;
const core = require('../core');
const Color = core.Color;
const Direction = {
  [Color.WHITE]: {
    left: {rj: -1, cj: -1},
    forward: {rj: -1, cj: 0},
    fastForward: {rj: -2, cj: 0},
    right: {rj: -1, cj: 1}
  },
  [Color.BLACK]: {
    left: {rj: 1, cj: 1},
    forward: {rj: 1, cj: 0},
    fastForward: {rj: 2, cj: 0},
    right: {rj: 1, cj: -1}
  }
};

class Pawn extends Piece {
  constructor(color) {
    super(color, 'Pawn', 'P');
  }
  attack(game, source) {
    const squares = new Set();
    const pawn = game.getPiece(source);
    const direction = Direction[pawn.color];
    const left = core.jump(game, source, direction.left);
    const right = core.jump(game, source, direction.right);
    if (left != null) squares.add(left.fr);
    if (right != null) squares.add(right.fr);
    return squares;
  }
}

module.exports = {
  Pawn: Pawn
};
