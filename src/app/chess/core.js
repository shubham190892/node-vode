const R = require('ramda');

const File = Object.freeze({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7});
const Rank = Object.freeze({8: 0, 7: 1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7});
const Row = {};
for (const k of Object.keys(Rank)) Row[Rank[k]] = k;
const Col = {};
for (const k of Object.keys(File)) Col[File[k]] = k;

class Index {
  r;
  c;
  fr;
  constructor() {}
}

function fromTable(r, c) {
  const idx = new Index();
  idx.r = r;
  idx.c = c;
  idx.fr = Col[c] + Row[r];
  return idx;
}

function fromChess(fr) {
  const idx = new Index();
  idx.r = Rank[fr[1]];
  idx.c = File[fr[0]];
  idx.fr = fr;
  return idx;
}

const FileRank = {};
for (const f of Object.keys(File)) {
  for (const r of Object.keys(Rank)) {
    const fr = f + r;
    FileRank[fr] = fromChess(fr);
  }
}

const GameStatus = Object.freeze({
  CHECKMATE: 0,
  STALEMATE: 1,
  DRAW_BY_AGREEMENT: 2,
  DRAW_BY_3_FOLD_REPETITION: 3,
  DRAW_BY_50_MOVE_RULE: 4,
  DRAW_BY_INSUFFICIENT_MATERIAL: 5,
  RESIGNATION: 6,
  LOST_ON_TIME: 7,
  LIVE: 100
});

const Color = Object.freeze({
  WHITE: 'White',
  BLACK: 'Black'
});

const Emoji = Object.freeze({
  White: {
    Square: '▦',
    Pawn: '♟',
    Rook: '♜',
    Knight: '♞',
    Bishop: '♝',
    Queen: '♛',
    King: '♚'
  },
  Black: {
    Square: ' ',
    Pawn: '♙',
    Rook: '♖',
    Knight: '♘',
    Bishop: '♗',
    Queen: '♕',
    King: '♔'
  },
  Number: {
    1: '1️',
    2: '2️',
    3: '3️',
    4: '4️',
    5: '5️',
    6: '6️',
    7: '7️',
    8: '8️'
  },
  /* Letter:{
        A: '🅰',
        B: '🅱',
        C: 'ℂ',
        D: ' D',
        E: 'ℰ',
        F: ' ℱ',
        G: '🇬',
        H: '🇭'
    },*/
  Letter: {
    A: ' 🅰',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H'
  },
  CornerStone: '⚙'
});

function scan(game, filter) {
  const whiteKeys = new Set(R.propOr([], 'white', filter));
  const blackKeys = new Set(R.propOr([], 'black', filter));
  const res = {
    white: {squares: {}},
    black: {squares: {}}
  };
  for (let r = 0; r < game.size; ++r) {
    for (let c = 0; c < game.size; ++c) {
      const p = game.board[r][c];
      if (p == null) continue;
      const colorKey = p.color === Color.WHITE ? 'white' : 'black';
      const colorSet = p.color === Color.WHITE ? whiteKeys : blackKeys;
      const idx = fromTable(r, c);
      if (p.symbol === 'K') {
        res[colorKey]['King'] = idx.fr;
      } else {
        if (colorSet.has(p.symbol)) res[colorKey]['squares'][idx.fr] = p.symbol;
      }
    }
  }
  return res;
}

function jump(game, source, direction) {
  let {r, c} = source;
  r += direction.rj;
  c += direction.cj;
  if (game.idxOnBoard(r, c)) {
    const idx = fromTable(r, c);
    const attacker = game.getPiece(source);
    if (attacker == null) return null;
    const targetPiece = game.getPiece(idx);
    if (targetPiece == null || attacker.color !== targetPiece.color) {
      return idx;
    }
  }
  return null;
}

function walk(game, source, rowJump, colJump) {
  const squares = [];
  const attacker = game.getPiece(source);
  if (attacker == null) return squares;
  let {r, c} = source;
  r += rowJump;
  c += colJump;

  while (game.idxOnBoard(r, c)) {
    const p = game.board[r][c];
    if (p != null) {
      if (attacker.color !== p.color) squares.push(fromTable(r, c).fr);
      break;
    }
    squares.push(fromTable(r, c).fr);
    r += rowJump;
    c += colJump;
  }
  return squares;
}

function walkStraight(game, source) {
  const up = walk(game, source, -1, 0);
  const down = walk(game, source, 1, 0);
  const left = walk(game, source, 0, -1);
  const right = walk(game, source, 0, 1);
  return [].concat(up, down, left, right);
}

function walkDiagonal(game, source) {
  const up_left = walk(game, source, -1, -1);
  const up_right = walk(game, source, 1, -1);
  const down_left = walk(game, source, -1, 1);
  const down_right = walk(game, source, 1, 1);
  return [].concat(up_left, up_right, down_left, down_right);
}

module.exports = {
  Color: Color,
  Emoji: Emoji,
  GameStatus: GameStatus,
  scan: scan,
  Index: {
    fromTable: fromTable,
    fromChess: fromChess
  },
  FR: FileRank,
  walkStraight: walkStraight,
  walkDiagonal: walkDiagonal,
  jump: jump
};
