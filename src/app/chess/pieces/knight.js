const Piece = require('./piece').Piece;

class Knight extends Piece{
    constructor(color) {
        super(color, 'Knight','N');
    }
}

module.exports = {
    Knight: Knight
};