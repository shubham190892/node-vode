const Game = require('./game').Game;
const command = require('./command');
const GS = require('./core').GameStatus;

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function gameLoop(game) {
    const cmdText = `Move ${Math.floor((game.moveCounter+1)/2)} -> ${game.turn === 0 ? 'White\'s' : 'Black\'s'} Turn: `;
    rl.question(cmdText, function (cmd) {
        cmd = command.parse(cmd);
        const res = cmd.execute(game);
        if(res.status){
            game.displayBoard();
            if(res.data.gameStatus !== GS.LIVE){
                console.log('Game Status', res.data.gameStatus);
                rl.close();
                process.exit();
            }
            game.moveCounter++;
            game.turn = game.turn ^ 1;
            gameLoop(game);
        }else{
            console.log('ERROR:', res.data.msg);
            gameLoop(game);
        }
    });
}

function start(game){
    game.init();
    game.displayBoard();
    gameLoop(game);
}

const game = new Game(123, 9007);

start(game);
