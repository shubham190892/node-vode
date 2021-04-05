/******************************************************************************
 * Problem: Given a sorted binary string, Find the index of 1st 1
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: Binary search approach
 * Time: O(log(n))
 * Space: O(log(n))
 ============================================================================== 
 */

function binSearch(text, s, e) {
  if (e < s) return -1;
  let m = Math.floor((s + e) / 2);
  if (text[m] === '1' && (m === 0 || text[m - 1] === '0')) {
    return m;
  }
  if (text[m] === '0') {
    return binSearch(text, m + 1, e);
  } else {
    return binSearch(text, 0, m - 1);
  }
}

function solve(binaryText) {
  return binSearch(binaryText, 0, binaryText.length - 1);
}

module.exports = {
  solve: solve
};
