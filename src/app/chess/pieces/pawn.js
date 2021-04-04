const Piece = require('./piece').Piece;

class Pawn extends Piece{
    constructor(color) {
        super(color, 'Pawn','P');
    }
    /*move(){
        console.log('Pawn move');
    }*/
}

module.exports = {
	Pawn: Pawn
};