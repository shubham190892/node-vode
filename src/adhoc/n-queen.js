/******************************************************************************
 * Problem: N Queen Problem, Place n queens on chess board(n x n)
 *  without attacking each other
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: Backtrack paradigm
 * Time:
 * Space:
 ==============================================================================
 */

const QUEEN = '♕';
const WHITE_CELL = '▦';
const BLACK_CELL = '☷';

function getMatrix(n, value) {
  const mtx = [];
  for (let i = 0; i < n; ++i) {
    const r = [];
    for (let j = 0; j < n; ++j)
      r.push(value === 0 ? value : (i + j) % 2 === 1 ? BLACK_CELL : WHITE_CELL);
    mtx.push(r);
  }
  return mtx;
}

function valid(rank, file, board) {
  return board.validationTable[rank][file] === 0;
}

function updateBoard(rank, file, board, value) {
  board.queen += value;
  for (let i = 0; i < board.size; ++i) {
    board.validationTable[rank][i] += value;
    board.validationTable[i][file] += value;
  }
  let i, j;
  i = rank + 1;
  j = file + 1;
  while (i < board.size && i >= 0 && j < board.size && j >= 0) {
    board.validationTable[i][j] += value;
    i++;
    j++;
  }
  i = rank - 1;
  j = file - 1;
  while (i < board.size && i >= 0 && j < board.size && j >= 0) {
    board.validationTable[i][j] += value;
    i--;
    j--;
  }
  i = rank + 1;
  j = file - 1;
  while (i < board.size && i >= 0 && j < board.size && j >= 0) {
    board.validationTable[i][j] += value;
    i++;
    j--;
  }
  i = rank - 1;
  j = file + 1;
  while (i < board.size && i >= 0 && j < board.size && j >= 0) {
    board.validationTable[i][j] += value;
    i--;
    j++;
  }
}

function place(rank, file, board) {
  board.boardTable[rank][file] = QUEEN;
  updateBoard(rank, file, board, 1);
}

function remove(rank, file, board) {
  board.boardTable[rank][file] =
    (rank + file) % 2 === 1 ? BLACK_CELL : WHITE_CELL;
  updateBoard(rank, file, board, -1);
}

function formatSolution(board) {
  let ans = '';
  for (const row of board.boardTable) {
    const tokens = [];
    for (const c of row) {
      tokens.push(c);
    }
    ans += tokens.join(' ') + '\n';
  }
  return ans;
}

function placeQueens(file, board) {
  let allSolutions = [];
  if (board.queen === board.size) {
    allSolutions.push(formatSolution(board));
  }
  if (file >= board.size) return allSolutions;
  let rank = board.size - 1;
  for (; rank >= 0; rank--) {
    if (valid(rank, file, board)) {
      place(rank, file, board);
      const res = placeQueens(file + 1, board);
      allSolutions = allSolutions.concat(res);
      remove(rank, file, board);
    }
  }
  return allSolutions;
}

function solve(n) {
  const board = {
    queen: 0,
    size: n,
    boardTable: getMatrix(n),
    validationTable: getMatrix(n, 0)
  };
  return placeQueens(0, board);
}

module.exports = {
  solve: solve
};
