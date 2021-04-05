const Piece = require('./piece').Piece;
const directions = [
  {rj: 2, cj: -1},
  {rj: 2, cj: 1},
  {rj: -2, cj: -1},
  {rj: -2, cj: 1},
  {rj: -1, cj: 2},
  {rj: 1, cj: 2},
  {rj: -1, cj: -2},
  {rj: 1, cj: -2}
];

class Knight extends Piece {
  constructor(color) {
    super(color, 'Knight', 'N');
  }
  attack(game, source) {
    const squares = new Set();
    const knight = game.getPiece(source);

    return squares;
  }
}

module.exports = {
  Knight: Knight
};
