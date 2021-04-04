const Piece = require('./piece').Piece;

class Queen extends Piece{
    constructor(color) {
        super(color, 'Queen','Q');
    }
}

module.exports = {
    Queen: Queen
};