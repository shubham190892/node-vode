const Piece = require('./piece').Piece;

class Rook extends Piece{
    constructor(color) {
        super(color, 'Rook','R');
    }

    attack(game, source) {
         const squares = new Set();
         let {r,c} = source;

         r++; c++;
         while (game.idxOnBoard(r, c)){
             const p = game.board[r][c];
             if(p != null) break;
             squares.add(super.normalizeIndex(r,c));
             r++; c++;
         }
    }
}

module.exports = {
    Rook: Rook
};