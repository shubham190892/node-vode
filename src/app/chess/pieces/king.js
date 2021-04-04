const Piece = require('./piece').Piece;

class King extends Piece{
    constructor(color) {
        super(color, 'King','K');
    }

}

module.exports = {
    King: King
};