function validateSource(game, tokens) {
	console.log('Call: validateSource');
	const res = {status: false, code: ''};
	const p = game.getPiece(tokens[0]);
	if(p == null){
		res.code = 'SOURCE_PIECE_NIL';
	}else if(game.getTurnColor() !== p.color){
		res.code = 'OPPONENT_PIECE_AT_SOURCE';
	}else{
		res.status = true;
	}
	return res;
}

function validateTarget(game, tokens) {
	console.log('Call: validateTarget');
	const res = {status: true, code: ''};
	const p = game.getPiece(tokens[1]);
	if(p == null) return res;

	if(game.getTurnColor() === p.color){
	    res.status = false;
		res.code = 'SELF_PIECE_AT_TARGET';
	}else if(p.symbol === 'K'){
		res.status = false;
		res.code = 'KING_AT_TARGET';
	}

	return res;
}

function validatePin(game, tokens){
	console.log('Call: validatePin');
	const res = {status: true, code: ''};
	return res;
}

module.exports = {
	validators: [validateSource, validateTarget, validatePin]
};