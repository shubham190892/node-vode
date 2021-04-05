const Color = require('../core').Color;
class Piece {
  color;
  name;
  symbol;
  notation;
  constructor(color, name, symbol) {
    this.color = color;
    this.name = name;
    this.symbol = symbol;
    this.notation = (color === Color.WHITE ? 'w' : 'b') + symbol;
  }

  normalizeIndex(r, c) {
    return `${r},${c}`;
  }

  attack(game, source) {
    return new Set();
  }

  toString() {
    return this.notation;
  }
}

module.exports = {
  Piece: Piece
};