const Piece = require('./piece').Piece;

class Bishop extends Piece{
    constructor(color) {
        super(color, 'Bishop', 'B');
    }
}

module.exports = {
    Bishop: Bishop
};