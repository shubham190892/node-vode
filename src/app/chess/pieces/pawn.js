const Piece = require('./piece').Piece;

class Pawn extends Piece{
    constructor(color) {
        super(color, 'Pawn','P');
    }
}

module.exports = {
	Pawn: Pawn
};