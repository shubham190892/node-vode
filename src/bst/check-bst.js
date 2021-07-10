/******************************************************************************
 * Problem: check if a given binary tree is BST
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: Start with range -INF to +INF, and update the range along with
 *  traversal. n is total nodes and h is the height of the tree
 * Time: O(n)
 * Aux Space: O(h)
 ==============================================================================
 */

const MAX = 1000000;
const MIN = -MAX;

function isBST(node, min, max) {
  if (node === null) return true;
  const value = node.value;
  if (value > min && value < max) {
    const leftSubTree = isBST(node.left, min, value);
    if (leftSubTree) {
      return isBST(node.right, value, max);
    }
    return false;
  } else {
    return false;
  }
}

function solve(root) {
  return isBST(root, MIN, MAX);
}

module.exports = {
  solve: solve
};
