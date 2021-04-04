const core = require('./core');
const validator = require('./validator');

const GS = core.GameStatus;

class Result {
    status;
    data;
    constructor(status, data) {
        this.status = status;
        this.data = data;
    }
}

function validate(cmd, game, tokens) {
   let result = {status: true, msg: ''};
   if(cmd.type === 1) return result;

   const validators = validator.validators;
   for(const v of validators){
        const vRes = v(game, tokens);
        if(!vRes.status) return vRes;
   }
   return result;
}

function move(cmd, game, tokens) {
    if(cmd.type === 1) return;
   game.move(core.Index.fromChess(tokens[0]), core.Index.fromChess(tokens[1]));
}

function calcGameStatus(game) {
    return GS.LIVE;
}

class Command {
    type;
    tokens;
    constructor(type, tokens) {
        this.type = type;
        this.tokens = tokens;
    }
    execute(game){
        if(this.type === 0){
            return new Result(false, {msg: 'Invalid Command Syntax'});
        }
        const v = validate(this, game, this.tokens);
        if(!v.status){
            return new Result(false, {msg: v.code});
        }
        move(this, game, this.tokens);
        const gs = calcGameStatus(game);
        return new Result(true, {gameStatus: gs});
    }
}

function validateCellCoordinate(cord) {
    if(!cord || cord.length !== 2) return false;
    if(cord[0] < 'a' || cord[0] > 'h') return false;
    if(cord[1] < 1 || cord[1] > 8) return false;
    return true;
}

function parse(cmd) {
    const command = new Command(0, null);
    if(!cmd) return command;
    cmd = cmd.trim();
    const tokens = cmd.split(' ');
    command.type = tokens.length;
    command.tokens = tokens;
    if(tokens.length === 1){
        if(['resign', 'draw'].indexOf(tokens[0]) === -1) command.type = 0;
    }else if(tokens.length > 3){
        return command.type = 0;
    }else{
        if (
            tokens[0] === tokens[1] ||
            !validateCellCoordinate(tokens[0]) ||
            !validateCellCoordinate(tokens[1])
        ) command.type = 0;
        if (tokens.length === 3 && ['Q', 'B', 'N', 'R'].indexOf(tokens[2]) === -1){
            command.type = 0;
        }

    }
    return command;
}

module.exports = {
	parse: parse
};