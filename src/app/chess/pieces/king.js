const Piece = require('./piece').Piece;

class King extends Piece{
    constructor(color) {
        super(color, 'King','K');
    }

    /*move(){
        console.log('King move');
    }*/
}

module.exports = {
    King: King
};